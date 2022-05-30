const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector("#input-text-output");
const textoMensaje = document.querySelector("#texto-mensaje");
const subTextoMensaje = document.querySelector("#sub-texto-mensaje");
const munheco = document.querySelector("#munheco");
const btnCopiar = document.querySelector("#boton-copiar");

function btnencriptar() {
  const textoEncriptado = encriptar(inputText.value);
  mensaje.value = textoEncriptado;
  if (textoEncriptado.length > 0) {
    munheco.classList.add("invisible");
    textoMensaje.classList.add("invisible");
    subTextoMensaje.classList.add("invisible");
    mensaje.classList.remove("invisible");
    btnCopiar.classList.remove("invisible");
  } else {
    munheco.classList.remove("invisible");
    textoMensaje.classList.remove("invisible");
    subTextoMensaje.classList.remove("invisible");
  }
}
function btndesencriptar() {
  const textoEncriptado = desencriptar(inputText.value);
  mensaje.value = textoEncriptado;
  if (textoEncriptado.length > 0) {
    munheco.classList.add("invisible");
    textoMensaje.classList.add("invisible");
    subTextoMensaje.classList.add("invisible");
    mensaje.classList.remove("invisible");
    btnCopiar.classList.remove("invisible");

}

function encriptar(StringParaEncriptar) {
  let matrizCodigo = [
    // 0,0
    ["e", "enter"], //* 0
    //1,1
    ["i", "imes"], //*1
    //2,2
    ["a", "ai"], //*2
    //3,3
    ["o", "ober"], //*3
    ["u", "ufat"], //*4
  ];
  //4,4

  StringParaEncriptar = StringParaEncriptar.toLowerCase(); //! convierto a minusculas
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
      StringParaEncriptar = StringParaEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  inputText.value = "";
  copiar(StringParaEncriptar);
  return StringParaEncriptar;
}
function copiar(copy) {
  const btn = document.getElementById("boton-copiar");
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(copy);
    console.log(copy);
  });
}

function desencriptar(StringParaEncriptar) {
  let matrizCodigo = [
    // 0,0
    ["enter", "e"], //* 0
    //1,1
    ["imes", "i"], //*1
    //2,2
    ["ai", "a"], //*2
    //3,3
    ["ober", "o"], //*3
    ["ufat", "u"], //*4
  ];
  //4,4
  StringParaEncriptar = StringParaEncriptar.toLowerCase(); //! convierto a minusculas
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
      StringParaEncriptar = StringParaEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  inputText.value = "";
  copiar(StringParaEncriptar);
  return StringParaEncriptar;
}
