var h1 = new Date()
var m1 = new Date()
var hora = h1.getHours()
var min = m1.getMinutes()
console.log(`São exatamente ${hora}:${min}h.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}