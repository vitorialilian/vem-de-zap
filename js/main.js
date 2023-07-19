// function mandaZap(elemento) {


//     const mensagens = document.querySelectorAll('div');

//     mensagens.addEventListener('click', () => {
//         let texto = elemento.firstElementChild.innerText;
//         let numero = prompt("Qual é o número?");
//     })
// }
// mandaZap()


const mensagens = document.querySelector('div')

mensagens.addEventListener('click', () => {
    let texto = mensagens.firstElementChild.innerText;
    let numero = prompt("Qual é o número?");
    let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    window.open(zapLink);
})


