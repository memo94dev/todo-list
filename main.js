// Función para crear Lista de Tareas

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ol = document.querySelector("ol");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ol.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ol.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

// Función para cambiar el fondo del body

function temauno(){
  var cuerpo = document.querySelector("body");
  cuerpo.style.background = "var(--clr-fondo-2)";
}

// Función para cambiar el fondo del body

function temados(){
  var cuerpo = document.querySelector("body");
  cuerpo.style.background = "var(--clr-fondo-3)";
}

// Función para cambiar el fondo del body al predeterminado

function tema(){
  var cuerpo = document.querySelector("body");
  cuerpo.style.background = "var(--clr-fondo)";
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