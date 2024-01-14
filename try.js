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
// // } while(i > 10)
// document.title = "Arsadam bareng Naufal"

// const body = document.body

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

// const btn1 = document.getElementById('btn1')
// const btn2 = document.querySelector('.btn2')

// console.log(btn1)
// console.log(btn2)

// btn1.style.border = "none"

// let btnstyle = btn1.style

// btnstyle.padding = '8px'
// btnstyle.fontSize = '5px'

// function gantiWarna() {
//     alert("aman")
//     btnstyle.background = 'red'
//     const newText = document.createElement('p')
//     newText.textContent= "Im EMU OTORI"
//     body.append(newText)
// }

// function ubahText() {
//     btnstyle.background = 'white'
// }

// function munculText(){
//     const textBaru = document.createElement('p')
//     textBaru.textContent = "Tugas Gas Gas"
//     textBaru.id = "gas"
//     body.append(textBaru)
// }
// function warnaText(){
//     const tugas = document.getElementById('gas')
//     gas.style.color = "red"
// }

// const arraySaya = ['🍉', '🍇', '🍈', '🍊', '🍎']

// const watermelon = arraySaya.includes('🍉')
// const pisang = arraySaya.includes('🍌')



// console.log(watermelon)
// if(watermelon) {
//     const posisiJeruk = arraySaya.indexOf('🍊')
//     console.log(`Buah jeruk itu ada dan ada di posisi ${posisiJeruk}`)
//     const indexbefore = posisiJeruk-1
//     const indexAfter = posisiJeruk+1
//     const before = arraySaya[indexbefore]
//     const after = arraySaya[indexAfter]
//     console.log(`Buah sebelum jeruk adalah ${before}`)
//     console.log(`Buah setelah jeruk adalah ${after}`)

//     const buahAwal = arraySaya.shift()
//     console.log(`Buah awal adalah ${buahAwal}`)
//     const buahAkhir = arraySaya.pop()
//     console.log(`Buah terakhir adalah ${buahAkhir}`)
// // }

// const arraySaya = []
// arraySaya['Alpukat'] = '🥑'
// arraySaya['Jeruk'] = '🍊'

// console.log(arraySaya['Jeruk'])

// const arraySaya = ['🍉', 10, {tomato: function(){console.log("Tomato")}}, ['eat', 'food']] //Original
// // const newArray = JSON.parse(JSON.stringify(arraySaya))

// // newArray[0] = '📰'

// // console.log({newArray})
// console.log(arraySaya[2].tomato())

const arraySaya = ['🍉', '🍇', '🍈']
const arrayKamu = ['😁', '🫥', '🪵']

const mergeArray = arraySaya.concat(arrayKamu)
console.log(mergeArray)

// for(list of mergeArray) console.log(list) cara 1

mergeArray.map((value, index) => console.log(index, value))

const datas = [
    {
        name: 'Pikek',
        stack: 'js',
        age: 15,
    },
    {
        name: 'Naufal',
        stack: 'js react dll',
        age: 20,
    },
    {
        name: 'Dika',
        stack: 'js react dll',
        age: 32,
    },
    {
        name: 'Daniel',
        stack: 'valorant',
        age: 10,
    },
]

datas
.sort((a, b) => a.age - b.age)
.filter((x) => x.age >=20)
.map((value) => console.log(value))

// Cara normal Function 
function normalFun(){
    console.log(arguments[0])
    console.log(arguments[1])
}

normalFun("Pikek", "Fahrell")

// Cara aga aneh function

const newFun = function notNormalFun(namaAwal, namaAkhir) {
    console.log(namaAwal, namaAkhir)
}

newFun("Pikek", "Fahrell")

const newestFun = new Function("x","y","console.log(x,y)")

newestFun(1,2)

// Cara makin ga normal

const newbieFun = (x,y) => {
    console.log(x+y)
}

newbieFun(5,3)

function luasLingkaran(r) {
    return Math.PI*r*r
}

const luasSegitiga = (a, t) => {
    return 1/2 * a *t
}

const persegiPanjang = new Function("p", "l", "return p * l")

const jajarGenjang = function berjajarGenjang(a, t) {
    return a*t
}

console.log(luasLingkaran(7))
console.log(luasSegitiga(2,6))
console.log(persegiPanjang(5, 4))
console.log(jajarGenjang(5, 4))

function gajiBulan(namaKaryawan, gajiPerhari, jumlahHariGaMasukKerja) {
    console.log("Nama Karyawan:", namaKaryawan)
    let masukSebulan = 30 - jumlahHariGaMasukKerja
    console.log("Masuk Kerja Sebulan:", masukSebulan)
    console.log("Gaji perBulan:", gajiPerhari*masukSebulan)
}

gajiBulan("Fahrell Sandy", 5000, 8)

const uangDompet = [2000, 5000, 10000, 50000, 100000]

// For of
for(let dompet of uangDompet) {
    console.log(dompet)
}

// For in (keluarin index dari array)
for(let dompet in uangDompet) {
    console.log(dompet)
}

// for each (ya begitulah)
uangDompet.forEach((dompet, index) => {
    console.log(dompet, index + 1)
});