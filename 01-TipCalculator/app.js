const amount = document.getElementById("amount")
const percentage = document.getElementById("percentage")
const calculate = document.getElementById("calculate")
const button = document.getElementById('btn')


function calculateTotal(){
  const total = amount.value * (percentage.value)/100
  calculate.innerText = ("Total:", total)
}

button.addEventListener("click", calculateTotal);