// Función para crear Lista de Tareas

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ol = document.querySelector("ol");
const empty = document.querySelector(".empty");
let suma = 0;

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Agregando un contador a la función crear Lista de Tareas, mas una constante para unir el numero mas el texto textNumerado

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    suma++;
    // console.log(suma);
    const textNumerado = (suma + "- " + text);
    p.textContent = textNumerado;

    // Función para contar el total de li

    // const litotal = document.querySelectorAll("li");
    // let total = litotal.length;
    // console.log(total);

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ol.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

// Función para crear botón para eliminar listas

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "✖";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ol.removeChild(item);
    suma--;

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
      suma = 0;
    }
  });

  return deleteBtn;
}

// Función para cambiar el fondo del body

function temauno() {
  var cuerpo = document.querySelector("body");
  var listado = document.querySelector("div.li-container");
  cuerpo.style.background = "var(--clr-fondo-2)";
  listado.classList.add("tema-dos");
  listado.classList.remove("tema-uno");
  listado.classList.remove("tema-tres");
}

// Función para cambiar el fondo del body

function temados() {
  var cuerpo = document.querySelector("body");
  var listado = document.querySelector("div.li-container");
  cuerpo.style.background = "var(--clr-fondo-3)";
  listado.classList.add("tema-tres");
  listado.classList.remove("tema-uno");
  listado.classList.remove("tema-dos");
}

// Función para cambiar el fondo del body al predeterminado

function tema() {
  var cuerpo = document.querySelector("body");
  var listado = document.querySelector("div.li-container");
  cuerpo.style.background = "var(--clr-fondo)";
  listado.classList.add("tema-uno");
  listado.classList.remove("tema-dos");
  listado.classList.remove("tema-tres");
}

// Función para descargar la lista generada en formato .txt

function descargar() {
  // Supongamos que tienes un elemento HTML con el contenido que deseas exportar

  const contenidoHTML = document.getElementById('contenido').innerText;

  // Crea un enlace de descarga para el archivo TXT
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenidoHTML);
  enlaceDescarga.download = 'Mi Lista.txt';
  //   enlaceDescarga.tittle = 'Descargar TXT';

  // Agrega el enlace al DOM
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();
  document.body.removeChild(enlaceDescarga);
}