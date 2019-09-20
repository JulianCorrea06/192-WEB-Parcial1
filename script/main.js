inputId = document.getElementById('input_id');
 var words =[];
var count =0;

inputId.addEventListener('keyup', function onEvent(e) {
    if(e.keyCode ==13 && count < 4){
        var elemento = inputId.value;
        inputId.value='';
        
        words.push(elemento);

        console.log('este elemento es '+ elemento);
          count ++;

        var Message1 = document.createElement("p");
        Message1.innerHTML = elemento;

        var container = document.querySelector('.mesagges');
        container.appendChild(Message1);
    }
});

