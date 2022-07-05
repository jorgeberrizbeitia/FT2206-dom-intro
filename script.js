console.log("todo bien!")

// selectores de DOM => querySelector

// buscamos la ref del elemento a modificar
const heading1 = document.querySelector("h1") // guardamos la referencia
console.log(heading1)


// existen multiples acciones automaticas o eventos

setTimeout(() => {
  heading1.innerText = "https://someimage.jpg"
}, 3000)

const heading2 = document.querySelector("h2")

// setInterval(() => {
//   heading2.innerText = Number(heading2.innerText) + 1
// }, 1000)


// eventos
const button1 = document.querySelector("button")

button1.addEventListener("click", () => {
  console.log("haciendo click")
  heading1.innerText = "he hecho click!"
  button1.innerText = "Boton clickado"
  heading2.innerText = 0
})

heading1.addEventListener("click", () => {
  console.log("haciendo click sobre el h1")
})


// diferentes selectores

const titleDOM = document.querySelector("#my-title")
console.log(titleDOM)
titleDOM.innerText = "Titulo cambiado"

const paragraphDOM = document.querySelector(".some-text") // un Nodo con el primer resultado de la busqueda
paragraphDOM.innerText = "patata"

// querySelectorAll

const allParagraphsDOM = document.querySelectorAll(".some-text") // NodeList con todos los resultados
console.log(allParagraphsDOM)

// nodelist son agrupaciones de nodos que simulan un array, tienes muchos de arrays, PERO no son arrays

allParagraphsDOM[1].innerText = "Este es el segundo elemento";

for (let eachNode of allParagraphsDOM) {
  eachNode.innerText = "cambiando con bucle for"
}

allParagraphsDOM.forEach((eachNode) => {
  eachNode.innerText = "cambiando los valores con el forEach"
})


// document.getElementById("un-id")
// document.getElementsByClassName("una-clase") 
// document.getElementsByTagName("una-etiqueta")


// selector anidados

const cardsDOM = document.querySelectorAll(".card"); // busca en toda la pagina!

cardsDOM.forEach((eachCard, index) => {
  if (index === 1) {
    let h3DOM = eachCard.querySelector("h3")
    h3DOM.innerText = "cambiando el H3 solo posición 1"
  }
})

// multiples propiedades

const footerDOM = document.querySelector("footer")

// innerText vs innerHTML vs textContent
console.log(footerDOM.innerText)
console.log(footerDOM.textContent)
console.log(footerDOM.innerHTML)

footerDOM.innerHTML = "<b>Cambiando el texto y eliminando </b>"

const ulDOM = document.querySelector("#un-ul")
ulDOM.innerHTML = "<li>elemento lista</li>"


// crear y eliminar elementos de DOM

const containerDOM = document.querySelector("#empty-container")

// crear un nuevo elemento de DOM
const h4DOM = document.createElement("h4")
console.log(h4DOM)
h4DOM.innerText = "Elemento nuevo!"

// hasta este punto, elemento solo existe en JS

// append para añadir elementos al DOM

// dondeAgregar.append(elElementoAAgregar)
setTimeout(() => {
  // solo 2 segundos despues, agrega el elemento
  containerDOM.append(h4DOM)
}, 2000)

setTimeout(() => {
  //elementoARemover.remove()
  h4DOM.remove()
}, 5000)


// propiedades y metodos de ids y clases

const finalThoughtsDOM = document.querySelector("#final-thoughts")
console.log(finalThoughtsDOM.id)
finalThoughtsDOM.id = "otro-id-nuevo"

console.log(finalThoughtsDOM.className)
// finalThoughtsDOM.className = "nueva-clase"

// manualmente cambiar una clase, sobreescribe todo lo anterior

// metodos para añadir, eliminar y verificar diferentes clases en un elemento de DOM

console.log(finalThoughtsDOM.classList)

// contains(), add(), remove()

console.log(finalThoughtsDOM.classList.contains("after-footer")) // true
console.log(finalThoughtsDOM.classList.contains("container")) // false

finalThoughtsDOM.classList.add("nueva-clase")
finalThoughtsDOM.classList.remove("best-practice")
finalThoughtsDOM.classList.remove("after-footer")