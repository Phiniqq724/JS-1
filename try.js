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

body.append("Hello World")

const heading1 = document.createElement('<marquee>h1</marquee>')

heading1.textContent='<marquee>Hello World</marquee>' 

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>Pikek</marquee>'

const namaKamu = document.createElement('b')
namaKamu.innerText = '<marquee>Naufal Dan Arsyadam (Dika)</marquee>'

body.append(heading1)
body.append(namaKamu)
body.append(namaSaya)

