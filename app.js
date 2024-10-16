const username= document.getElementById('name')
const usernote1= document.getElementById('note1')
const usernote2= document.getElementById('note2')
const usernote3= document.getElementById('note3')
const btnCalculate= document.getElementById('btn-calculate')
const button= document.getElementById('button')
const result= document.getElementById('result')

btnCalculate.addEventListener('click',calculateNote)

function calculateNote() {
    let defi;
    let user=username.value
    let data1=Number(note1.value)
    let data2=Number(note2.value)
    let data3=Number(note3.value)
    let response=(data1*0.3)+(data2*0.3)+(data3*0.4)

    if (response <3.5) {
        defi=("Perdió la materia")
        result.style.color='red'
    }else if (response>=3.5 && response<=4.5) {
        defi=("Ganó la materia")
        result.style.color='orange'
    }else if (response >4.5 && response<=5.0) {
        defi=("Nota Sobresaliente")
        result.style.color='green'
    }

    result.textContent=  `Sr@ ${user} su nota es de ${response} ${defi}`
}

button.addEventListener('click',predictNote)

function predictNote() {
    let data1=Number(note1.value)
    let data2=Number(note2.value)
    let predict= (3.5 -(data1 *0.3)-(data2*0.3))/0.4
    note3.value= `${predict}`
}