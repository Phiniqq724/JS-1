// // // let namaGuru = []
// // // namaGuru[0] = 'Dea'
// // // namaGuru[1] = 'Fikri'
// // // namaGuru.shift()
// // // namaGuru.pop()
// // // alert(namaGuru)

// // const namaGuru = ['dea', 'fikri', 'pikek', 'naufal']

// // // For loop
// // for(let i = 0; i <namaGuru.length; i = i+1){
// //     console.log(namaGuru[i])
// // }
// let i = 0

// while(i < 10){
//     i++
//     console.log("Im emu otori")
// }

// do{
//     console.log("Im emu otori")
//     i++
// } while(i > 10)
document.title = "Arsadam bareng Naufal"

const body = document.body

// body.append("Hello World");

// const heading1 = document.createElement('p');

// heading1.textContent='<marquee>test</marquee>' 

// const namaSaya = document.createElement('p');

// namaSaya.innerHTML = '<marquee>Pikek</marquee>'

// const namaKamu = document.createElement('p');

// namaKamu.innerText = '<marquee>Naufal Dan Arsyadam (Dika)</marquee>'

// body.append(heading1)
// body.append(namaKamu)
// body.append(namaSaya)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

console.log(btn1)
console.log(btn2)

btn1.style.border = "none"

let btnstyle = btn1.style

btnstyle.padding = '8px'
btnstyle.fontSize = '5px'

function gantiWarna() {
    alert("aman")
    btnstyle.background = 'red'
    const newText = document.createElement('p')
    newText.textContent= "Im EMU OTORI"
    body.append(newText)
}

function ubahText() {
    btnstyle.background = 'white'
}

function munculText(){
    const textBaru = document.createElement('p')
    textBaru.textContent = "Tugas Gas Gas"
    textBaru.id = "gas"
    body.append(textBaru)
}
function warnaText(){
    const tugas = document.getElementById('gas')
    gas.style.color = "red"
}

