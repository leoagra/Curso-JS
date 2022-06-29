function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Deixe de ser trouxa e digite um número')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} + ${c} = ${n*c}`
            tab.appendChild(item)
        }

    }
    /*
    if(num.value.length == 0){
        alert('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        let c = 1 // variável criada como contador
        tab.innerHTML = '' // para apagar a tabela antes de gerar uma nova
        while (c <= 10){
            let item = document.createElement('option')// para criar qualquer elemento dentro de JS eu uso "createElement('qual elemento')" 
            item.value = `tab${c}` // serve para PHP( ainda vai saber a função)
            item.text = `${n} + ${c} = ${n*c}`// item.text (nome da variavel.text) usa-se para adicionar os valores dentro da option.
            tab.appendChild(item) // faz o elemento ser adicionado para dentro do desejado. ( a variável "item" foi adicionada dentro de "tab")
            c++ // o contador propriamente dito
        }
    }
    */
}