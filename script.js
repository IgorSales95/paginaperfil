const botaoModoClaro = document.getElementById('modo-claro');
const body = document.body;

botaoModoClaro.addEventListener('click', () => {
  if (body.classList.contains('modo-claro')) {
    body.classList.remove('modo-claro');
    body.classList.add('modo-escuro');
  } else {
    body.classList.remove('modo-escuro');
    body.classList.add('modo-claro');
  }
});
