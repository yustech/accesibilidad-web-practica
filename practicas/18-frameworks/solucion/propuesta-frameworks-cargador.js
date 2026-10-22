const permitidos = ['react', 'vue', 'lit'];
const pedido = new URLSearchParams(location.search).get('fw');
const framework = permitidos.includes(pedido) ? pedido : 'react';

for (const enlace of document.querySelectorAll('[data-fw]')) {
  enlace.href = `?fw=${enlace.dataset.fw}`;
  if (enlace.dataset.fw === framework) enlace.setAttribute('aria-current', 'true');
}
document.querySelector('#fw-actual').textContent = framework;

const script = document.createElement('script');
script.type = 'module';
script.src = `../../../dist/frameworks/18-frameworks-${framework}.js`;
document.body.append(script);
