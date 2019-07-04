var num = document.getElementById('fnum') 
var lista = document.querySelector('select#flista') 
var res = document.querySelector('div#res') 
var valores = [] 
function isNumero(n) { 
    if (Number(n) >= 1 && Number(n) <= 100) {
         return true 
        } else { 
            return false 
        }
 } 
function inLista(numero, valores) { 
    valores.forEach(valor => { 
        if (valor == numero) { 
            console.log(true)
             return true 
        } else {
             console.log(valor) 
             return false 
            } }) }
function add() {
     if (isNumero(num.value) && !inLista(num.value, valores)) {
          window.alert('ok')
           valores.push(num.value)
            console.log(valores) 
        } else { 
            window.alert('Valor invalido ou ja encontrado na lista') 
        } 
}
