console.log("todo bien!");

// selectores de DOM => querySelector

// buscamos la ref del elemento a modificar
const heading1 = document.querySelector("h1"); // guardamos la referencia
console.log(heading1);

// existen multiples acciones automaticas o eventos

setTimeout(() => {
  heading1.innerText = "https://someimage.jpg";
}, 3000);

const heading2 = document.querySelector("h2");

// setInterval(() => {
//   heading2.innerText = Number(heading2.innerText) + 1
// }, 1000)

// eventos
const button1 = document.querySelector("button");

button1.addEventListener("click", () => {
  console.log("haciendo click");
  heading1.innerText = "he hecho click!";
  button1.innerText = "Boton clickado";
  heading2.innerText = 0;
});

heading1.addEventListener("click", () => {
  console.log("haciendo click sobre el h1");
});

// diferentes selectores

const titleDOM = document.querySelector("#my-title");
console.log(titleDOM);
titleDOM.innerText = "Titulo cambiado";

const paragraphDOM = document.querySelector(".some-text"); // un Nodo con el primer resultado de la busqueda
paragraphDOM.innerText = "patata";

// querySelectorAll

const allParagraphsDOM = document.querySelectorAll(".some-text"); // NodeList con todos los resultados
console.log(allParagraphsDOM);

// nodelist son agrupaciones de nodos que simulan un array, tienes muchos de arrays, PERO no son arrays

allParagraphsDOM[1].innerText = "Este es el segundo elemento";

for (let eachNode of allParagraphsDOM) {
  eachNode.innerText = "cambiando con bucle for";
}

allParagraphsDOM.forEach((eachNode) => {
  eachNode.innerText = "cambiando los valores con el forEach";
});

// document.getElementById("un-id")
// document.getElementsByClassName("una-clase")
// document.getElementsByTagName("una-etiqueta")

// selector anidados

const cardsDOM = document.querySelectorAll(".card"); // busca en toda la pagina!

cardsDOM.forEach((eachCard, index) => {
  if (index === 1) {
    let h3DOM = eachCard.querySelector("h3");
    h3DOM.innerText = "cambiando el H3 solo posición 1";
  }
});

// multiples propiedades

const footerDOM = document.querySelector("footer");

// innerText vs innerHTML vs textContent
console.log(footerDOM.innerText);
console.log(footerDOM.textContent);
console.log(footerDOM.innerHTML);

footerDOM.innerHTML = "<b>Cambiando el texto y eliminando </b>";

const ulDOM = document.querySelector("#un-ul");
ulDOM.innerHTML = "<li>elemento lista</li>";

// crear y eliminar elementos de DOM

const containerDOM = document.querySelector("#empty-container");

// crear un nuevo elemento de DOM
const h4DOM = document.createElement("h4");
console.log(h4DOM);
h4DOM.innerText = "Elemento nuevo!";

// hasta este punto, elemento solo existe en JS

// append para añadir elementos al DOM

// dondeAgregar.append(elElementoAAgregar)
setTimeout(() => {
  // solo 2 segundos despues, agrega el elemento
  containerDOM.append(h4DOM);
}, 2000);

setTimeout(() => {
  //elementoARemover.remove()
  h4DOM.remove();
}, 5000);

// propiedades y metodos de ids y clases

const finalThoughtsDOM = document.querySelector("#final-thoughts");
console.log(finalThoughtsDOM.id);
finalThoughtsDOM.id = "otro-id-nuevo";

console.log(finalThoughtsDOM.className);
// finalThoughtsDOM.className = "nueva-clase"

// manualmente cambiar una clase, sobreescribe todo lo anterior

// metodos para añadir, eliminar y verificar diferentes clases en un elemento de DOM

console.log(finalThoughtsDOM.classList);

// contains(), add(), remove()

console.log(finalThoughtsDOM.classList.contains("after-footer")); // true
console.log(finalThoughtsDOM.classList.contains("container")); // false

finalThoughtsDOM.classList.add("nueva-clase");
finalThoughtsDOM.classList.remove("best-practice");
finalThoughtsDOM.classList.remove("after-footer");

// EVENTS

// functiones
const mouseEnterTitle = () => {
  console.log("el ratón esta sobre el elemento");
  eventTitleDOM.innerText = "Hola";
  // directamente desde DOM podemos cambiar los estilos de los elementos
  eventTitleDOM.style.color = "blue";
  finalThoughtsDOM.style.color = "purple";
}

const mouseLeaveTitle = () => {
  console.log("el ratón ya no está sobre el elemento");
  eventTitleDOM.innerText = "Adios";
  eventTitleDOM.style.color = "red";
  finalThoughtsDOM.style.color = "yellow";
}

const count = () => {
  // aqui va a incrementar el eurosDOM
  eurosDOM.innerText = Number(eurosDOM.innerText) + 1
  // eurosDOM.innerText++
}

const restar = () => {
  eurosDOM.innerText = Number(eurosDOM.innerText) - 1
  // eurosDOM.innerText--
}

const addItemToList = () => {
  console.log("aqui vamos a agregar un li al ul")
  // 1. necesitamos el texto a agregar al li
  console.log(inputDOM.value)
  let textoLi = inputDOM.value
  // 2. crear el elemento li
  let liDOM = document.createElement("li")
  // 3. le agregamos el texto al li
  liDOM.innerText = textoLi
  // 4. agrega el li al ul
  listDOM.append(liDOM)
}

const deleteButton = (event) => {
  console.log(event)
  console.log("aqui intentamos borrar el boton")
  // event siempre será el accionador que ocasiona el evento
  // event.target siempre será el elemento DOM sobre el cual se hace el evento
  // .remove() ????
  let elBotonDOM = event.target
  // elBotonDOM.remove()

  // tambien podemos acceser al elemento padre de cualquier elemento de DOM
  // parentNode
  let parentDOM = elBotonDOM.parentNode
  parentDOM.remove()
}

// elementos de DOM
const eventTitleDOM = document.querySelector("#event-title");
const buttonIncreaseDOM = document.querySelector("#increment");
const eurosDOM = document.querySelector("#counter span")
const buttonDecreaseDOM = document.querySelector("#decrement")
const inputDOM = document.querySelector("#name")
const buttonAddDOM = document.querySelector("#add-btn")
const listDOM = document.querySelector("#output-list")
const lastBtnsDOM = document.querySelectorAll(".last-btn") // nodeList

window.addEventListener("load", () => {
// espera que la pagina cargue correctamente, y luego agrega los eventListeners
  
  // event listeners
  eventTitleDOM.addEventListener("mouseenter", mouseEnterTitle);
  eventTitleDOM.addEventListener("mouseleave", mouseLeaveTitle);
  buttonIncreaseDOM.addEventListener("click", count)
  buttonDecreaseDOM.addEventListener("click", restar)
  buttonAddDOM.addEventListener("click", addItemToList)
  lastBtnsDOM.forEach((eachBtnDOM, index) => {
    eachBtnDOM.addEventListener("click", deleteButton)
  })

})