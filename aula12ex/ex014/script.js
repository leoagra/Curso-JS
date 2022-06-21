function carregar() { //cria uma 'function' para chamar a função do colocada no HTML
    var msg = document.getElementById('msg') // chama a id 'msg' do html para o JS
    var img = document.getElementById('imagem') // chama a id 'imagem' do html para o JS
    var data = new Date() //variável criada para chamar a data/hora do sistema
    var hora = data.getHours() // varivável criada para a hora chamando a 'var data'
    //var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.` // troca o que tiver escrito na "div msg" pela nova mensagem.
    if (hora >= 0 && hora < 12) {
        //foto manhã
        img.src = 'imagens/manhã.png' // chama a imagem que vc quer usar
        
    } else if (hora >= 12 && hora <= 18) {
        //foto tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#86914c' // muda o background
    } else {
        //foto noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#2e472d'
    }
    

}

