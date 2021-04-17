/*
*  Usando a função init só será chamada e executada
*  quando a página estiver sido totlamente carregada.
*/
window.onload = init;
function init(){
    /*
    * Após a página ser carregada, pegamos o botão e configuramos
    * seu manipulador onclick.
    */ 
    let button = document.getElementById('addButton');
    button.onclick = handleButtonClick;
}
/*
* E o manipulador de click exibirá um alerta quando
* clicarmos no botão.
*/
function handleButtonClick(){
    let textInput = document.getElementById('songTextInput');
    let songName = textInput.value;

    if(songName == ""){
        alert('Pelase, enter a song');
    }else{
        alert(`Adding ${songName}`);
    }
}