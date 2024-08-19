// Función para crear Lista de Tareas

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
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
    ul.appendChild(li);

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
    ul.removeChild(item);

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

// Función para exportar Lista a tipo .txt

// function exportar(){
//   var contenido = document.getElementById("contenido").value;
//   var enlace = document.createElement("a");
//   enlace.setAtribute("href" , "data:text/plain;charset=utf-8," + encodeURIComponent(contenido));
//   enlace.setAtribute("download" , "Mi Lista.txt");
//   enlace.style.display = "none";

//   document.body.appendChild(enlace);
//   enlace.click();
//   document.body.removeChild(enlace);
// }
