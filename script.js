const botaoLightMode = document.getElementById('light-mode');
const body = document.body;

botaoLightMode.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('mode-dark');
  } else {
    body.classList.remove('mode-dark');
    body.classList.add('light-mode');
  }
});
