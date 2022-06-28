function contar(){ //let é usado recentemente por questão de scoopo
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível Contar! \u{1F937}`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)   
     if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){ //contagem crescente
           for(let c = i; c <= f; c += p) { // a variavel "c" começa do  inicio "i", enquando o contador "c" for menor ou igual ao fim "f", o contador vai receber ele mesmo mais o passo "p"
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else { // contagem regressiva
           for(let c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}` //para usar emoji no JS, ele deve estar entre crases (``), no lugar de "U+" vc coloca "\u" e o resto do codigo dentro de chaves {}
 
    }
}

