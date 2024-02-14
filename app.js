// Seleccionar los elementos del DOM

const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

const colorHexa = document.getElementById('colorHexa');

function componentToHex(c) {

  const numHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cociente = parseInt(c);
  let cociente1 = cociente / 16;
  let cociente2 = Math.trunc(cociente1);
  let cocienteS = (cociente1 - cociente2)*16;
  return numHexa[cociente2]+numHexa[cocienteS];
}

function rgbToHex(r, g, b) {
  const xhexa = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  return xhexa;
}

function cambioColor(rojo, verde, azul) {
  const actualizarColor = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = actualizarColor //"rgb("+r+","+g+","+b+")";
  // console.log(rojo, verde, azul);
}

rojo.addEventListener("mousemove", (e) => {
  textoRojo.innerText = e.target.value;
  cambioColor(e.target.value, verde.value, azul.value);
  colorHexa.innerText = rgbToHex(e.target.value, verde.value, azul.value);
});

verde.addEventListener("mousemove", (e) => {
  textoVerde.innerText = e.target.value;
  cambioColor(rojo.value, e.target.value, azul.value);
  colorHexa.innerText = rgbToHex(rojo.value, e.target.value, azul.value);
});

azul.addEventListener("mousemove", (e) => {
  textoAzul.innerText = e.target.value;
  cambioColor(rojo.value, verde.value, e.target.value);
  colorHexa.innerText = rgbToHex(rojo.value, verde.value, e.target.value);
});

