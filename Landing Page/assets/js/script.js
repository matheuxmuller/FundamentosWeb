// Identificar o clique no menu

const menuItens = document.querySelectorAll(".menu a");

// Verificar se o item foi clicado e fazer referência ao seu alvo

    menuItens.forEach(item => {
        item.addEventListener("click", scrollToIdOnClick)
    })

    function scrollToIdOnClick(event) {
        event.preventDefault()
        
        const to = getScrollTopByHref(event.currentTarget) - 80
        scrollToPosition(to)
    }

// Animação do scroll

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

// Verificar a distância entre o alvo e o topo

    function getScrollTopByHref(element){
        const id = element.getAttribute("href")
        return document.querySelector(id).offsetTop
    }

// Validações //

function validaEmail () { 
    let txtEmail = document.querySelector("#txtEmail")
    
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "black"
    }
    else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
    }
}