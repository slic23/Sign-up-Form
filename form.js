let botom = document.querySelector('button')

console.log(botom.innerText)



///////////////


/// comprobar contraseña si es igual a la del a lado para ello distinguiremos las contraseñas poniendolas ids
// este problema debe usarse los regx 



const passwords1 = document.getElementById('password1')
const passwords = document.getElementById('password2')

passwords1.addEventListener('blur',validation)
passwords.addEventListener('blur',validation)

function validation() {
  const password1 = document.getElementById('password1').value
const password2 = passwords.value

  
if( password1 ===password2  )  {


  console.log("here")







  document.getElementById('password1').classList.add('blue')
  document.getElementById('password2').classList.add('blue') 

  const spanNo = document.querySelector('span')
  spanNo.innerText = ""



 
}else {
  

  document.getElementById('password1').classList.remove('blue')
  document.getElementById('password2').classList.remove('blue') 
  const span = document.querySelector('span')
  span.innerText = "*"

}

}


/////



