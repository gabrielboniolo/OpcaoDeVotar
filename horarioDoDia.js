var horario = new Date()
var hora = horario.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 4 && hora < 12) {
    console.log("Bom dia para você!")
}
else if(hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
}
else {
    if(hora>=18 && hora<24) {
        console.log('Boa noite!')
    }
    else if(hora>= 00 || 0 && hora<4) {
        console.log('Boa Madrugada!')
    }
}