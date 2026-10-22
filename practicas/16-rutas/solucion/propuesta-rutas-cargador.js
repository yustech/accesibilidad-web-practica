const permitidos = ['react', 'vue', 'lit'];
const pedido = new URLSearchParams(location.search).get('fw');
const framework = permitidos.includes(pedido) ? pedido : 'react';

for (const enlace of document.querySelectorAll('[data-fw]')) {
  const activo = enlace.dataset.fw === framework;
  enlace.href = `?fw=${enlace.dataset.fw}`;
  if (activo) enlace.setAttribute('aria-current', 'true');
}
document.querySelector('#fw-actual').textContent = framework;

const script = document.createElement('script');
script.type = 'module';
script.src = `../../../dist/frameworks/16-rutas-${framework}.js`;
document.body.append(script);
