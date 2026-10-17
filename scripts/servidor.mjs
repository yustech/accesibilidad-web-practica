import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.vtt': 'text/vtt; charset=utf-8',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
};
const vendor = {
  '/vendor/bootstrap.min.css': 'node_modules/bootstrap/dist/css/bootstrap.min.css',
  '/vendor/bootstrap.bundle.min.js':
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
};

export function createCourseServer() {
  return http.createServer(async (request, response) => {
    try {
      if (!['GET', 'HEAD'].includes(request.method)) {
        response.writeHead(405, { Allow: 'GET, HEAD' }).end();
        return;
      }
      const url = new URL(request.url, 'http://127.0.0.1');
      const pathname = decodeURIComponent(url.pathname);
      if (
        pathname.includes('\0') ||
        pathname
          .split(/[\\/]/)
          .some((part) => part.startsWith('.') || part === 'node_modules')
      ) {
        response.writeHead(403).end('Acceso no permitido');
        return;
      }
      let file = vendor[pathname]
        ? path.resolve(root, vendor[pathname])
        : path.resolve(root, '.' + pathname);
      if (file !== path.resolve(root) && !file.startsWith(root)) {
        response.writeHead(403).end('Acceso no permitido');
        return;
      }
      if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
      const data = await readFile(file);
      const headers = {
        'Content-Type': mime[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': 'no-store',
        'Accept-Ranges': 'bytes',
        'Content-Length': data.length,
      };
      if (request.headers.range) {
        const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range);
        let start, end;
        if (range && (range[1] || range[2])) {
          start = range[1]
            ? Number(range[1])
            : Math.max(0, data.length - Number(range[2]));
          end =
            range[1] && range[2]
              ? Math.min(Number(range[2]), data.length - 1)
              : data.length - 1;
        }
        if (
          !Number.isSafeInteger(start) ||
          !Number.isSafeInteger(end) ||
          start > end ||
          start >= data.length
        ) {
          response.writeHead(416, { 'Content-Range': `bytes */${data.length}` }).end();
          return;
        }
        const part = data.subarray(start, end + 1);
        response.writeHead(206, {
          ...headers,
          'Content-Length': part.length,
          'Content-Range': `bytes ${start}-${end}/${data.length}`,
        });
        response.end(request.method === 'HEAD' ? undefined : part);
      } else {
        response.writeHead(200, headers);
        response.end(request.method === 'HEAD' ? undefined : data);
      }
    } catch (error) {
      response
        .writeHead(error.code === 'ENOENT' || error.code === 'ENOTDIR' ? 404 : 400, {
          'Content-Type': 'text/plain; charset=utf-8',
        })
        .end('No se encuentra el recurso solicitado.');
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const arg = process.argv.find((value) => value.startsWith('--port='));
  const port = Number(arg?.split('=')[1] || process.env.PORT || 4173);
  if (!Number.isInteger(port) || port < 1 || port > 65535)
    throw new Error('Puerto inválido');
  const server = createCourseServer();
  server.on('error', (error) => {
    console.error(
      error.code === 'EADDRINUSE'
        ? `El puerto ${port} está ocupado. Usa npm start -- --port=4174.`
        : error.message,
    );
    process.exitCode = 1;
  });
  server.listen(port, '127.0.0.1', () =>
    console.log(`Prácticas disponibles en http://127.0.0.1:${port}`),
  );
}
