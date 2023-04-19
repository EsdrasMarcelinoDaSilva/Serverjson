const apiKey =  '8fa8be48'

const getPosts = async (field) => {

  const apiResponse = await fetch(`http://www.omdbapi.com/?s=${field}&apikey=${apiKey}`)
  const posts = await apiResponse.json();
  
  // Limpa os resultados anteriores
  const resultadosAnteriores = document.getElementById('resultados')

  if (resultadosAnteriores) {
    resultadosAnteriores.remove()
  }

  // Cria um elemento HTML para cada post
  const resultados = document.createElement('div')
  resultados.setAttribute('id', 'resultados')
  
  posts.Search.forEach((post) => {
    const item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `
      <h3>${post.Title}</h3>
      <p>${post.Year}</p>
      <img src="${post.Poster}">
    `
    resultados.appendChild(item)
  })

  // Adiciona os resultados à página HTML
  document.body.appendChild(resultados)
}

function criarFormulario() {
  const formularioAnterior = document.getElementById('formulario')
  if(formularioAnterior){
      formularioAnterior.remove()
   }
  
  const formulario = document.createElement("form")
  formulario.classList.add('enviado') 
  formulario.onsubmit = (event) => {
    event.preventDefault()
    
    let elements = event.target.elements;
    let name = ''
    
    for(let c = 0; c < elements.length; c++){
      if(elements[c].name === 'field'){
        name = elements[c].value
      }
    }
    const displayForm = document.querySelector("form")
    displayForm.style.display = 'none'
    const displayModal = document.getElementById("box")
    displayModal.style.display = 'none'
    getPosts(name)
  }

  const boxForm = document.createElement("div")
  boxForm.setAttribute("id", "box") 

  const headForm = document.createElement("h2")
  headForm.textContent = "Gerador de Conteudo"

  const labelTitulo = document.createElement("label")
  labelTitulo.textContent = "Titulo "

  const campoTitulo = document.createElement("input")
  campoTitulo.setAttribute("type", "text")
  campoTitulo.setAttribute("name", "field")
  campoTitulo.setAttribute("placeholder", "Titulo")

  const botaoEnviar = document.createElement("button")
  botaoEnviar.textContent = "Search"
  botaoEnviar.setAttribute("class", "enviar")

  formulario.appendChild(headForm)
  formulario.appendChild(labelTitulo)
  formulario.appendChild(campoTitulo)
  formulario.appendChild(document.createElement("br"))
  formulario.appendChild(botaoEnviar)
  
  boxForm.appendChild(formulario)
  document.body.appendChild(boxForm)
}

