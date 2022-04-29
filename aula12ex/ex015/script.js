function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //'value' é valor e 'lenght' é o comprimento de caracteres
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // criar dinamicamente no js
        img.setAttribute('id', 'foto') // cria um id para foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 5) {
                //criança
                img.setAttribute('src', 'imagens/hoemem_crianca.png') //chama a imagem do bonco de imagens
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'imagens/homem_adolec.png')
            } else if (idade < 28) {
                //jovem adultu
                img.setAttribute('src', 'imagens/homem_adulto_jovem.png')
            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else {
                //adulto velho
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 5) {
                //criança
                img.setAttribute('src', 'imagens/mulher_crianca.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'imagens/mulher_adolec.png')
            } else if (idade < 28) {
                //jovem adultu
                img.setAttribute('src', 'imagens/mulher_adulta_jovem.png')
            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                //adulto velho
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img) // faz com que a imagem apareça na tela
    }

}