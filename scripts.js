
// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const enlaces = document.getElementsByTagName("a");


for (const enlace of enlaces) {
  enlace.addEventListener("click", (e) => {
    e.preventDefault()
  })
}

// 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento.

  // 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
  const imagenes = document.getElementsByTagName("img");
  const arraygifs = ["assets/magic-1.gif", "assets/magic-2.gif", "assets/magic-3.gif", "assets/magic-3.gif", "assets/magic-4.gif", "assets/magic-5.gif", "assets/magic-6.gif"]

  for (const imagen of imagenes) {
    imagen.addEventListener("click", (e) => {
      let gifRandom = getRandom(arraygifs) 
      imagen.setAttribute("src", gifRandom)
    })
  }
  // 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
  const parrafos = document.getElementsByTagName("p");
  for (const parrafo of parrafos) {
    parrafo.addEventListener("click", (e) => {
      parrafo.style.background = "red"
      parrafo.style.color = "white" 
    })
  }
  // 2.3 Bloques de article o section: Cambia el color de fondo.
  const articulos = document.getElementsByTagName("article");
  const sections = document.getElementsByTagName("section");

  function cambiarFondo(bloque) {
    bloque.style.background = "green"
  }

  for (const articulo of articulos) {
    articulo.addEventListener("click", (e) => {
      cambiarFondo(articulo)
    })
  }

  for (const section of sections) {
    section.addEventListener("click", (e) => {
      cambiarFondo(section)
    })
  }


// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

  // 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
  for (const imagen of imagenes) {
    const urlOriginal = imagen.getAttribute("src")

    imagen.addEventListener("mouseover", (e) => {
      imagen.setAttribute("src", "assets/abracadabra.gif")
    })

    imagen.addEventListener("mouseout", (e) => {
      imagen.setAttribute("src", urlOriginal)
    })
  }

  // 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
  for (const parrafo of parrafos) {
    const colorParrafo = parrafo.getAttribute("color");
    const fondoParrafo = parrafo.getAttribute("background");

    parrafo.addEventListener("mouseover", (e) => {
      parrafo.style.color = "red"
      parrafo.style.background = "black"
    })

    parrafo.addEventListener("mouseout", (e) => {
      parrafo.style.color = colorParrafo
      parrafo.style.background = fondoParrafo
    })
  }

  // 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
  for (const articulo of articulos) {
    const fondoArticulo = articulo.getAttribute("background")
    
    articulo.addEventListener("mouseover", (e) => {
      articulo.style.background = "orange" 
    })

    articulo.addEventListener("mouseout", (e) => {
      articulo.style.background = fondoArticulo
    })
  }
  


// PREMIUM

// 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const colors = ["red", "blue", "green"];

const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}
console.log(getRandom(colors));