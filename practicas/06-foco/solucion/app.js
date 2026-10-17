const modal = document.querySelector('#modal');
const opener = document.querySelector('#abrir');
opener.addEventListener('click', () => modal.showModal());
modal.addEventListener('close', () => {
  if (opener.isConnected) opener.focus();
});
