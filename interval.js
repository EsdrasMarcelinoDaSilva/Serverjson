let intervalo = ''
function iniciarIntervalo(){
    intervalo = setInterval(()=>{
      criarFormulario()
      pararIntervalo()
    }, 5000)
}
function pararIntervalo(){
    clearInterval(intervalo)
}
