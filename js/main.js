const mensagens = document.querySelectorAll('div')

mensagens.forEach((div) => {
    div.onclick = () => {
        let texto = div.innerText;
        let numero = prompt("Qual é o número?");
        let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
        window.open(zapLink);
    }
});

