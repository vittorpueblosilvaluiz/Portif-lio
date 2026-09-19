







function ativaletra(elemento){
        const arrTexto = elemento.innerHTML.split(''); //Separando cada letra do texto
        elemento.innerHTML = ''; //Limpando o texto do elemento
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{ //Função para adicionar cada letra com um atraso
                elemento.innerHTML += letra; //Adicionando cada letra ao elemento
            }, 75 * i);
        });
}
        
const titulo = document.querySelector('.digitando');
ativaletra(titulo); //Chamando a função para ativar a animação de digitação no elemento
