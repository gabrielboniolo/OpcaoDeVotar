var idade = 17
console.log(`Sua idade é de ${idade} anos.`)
if(idade < 16) {
    console.log('Você não pode votar.')
}
else if(idade<18 || idade>65) {
    console.log('O seu voto é opcional')
}
else {
    console.log('Votar é obrigatório para você.')
}