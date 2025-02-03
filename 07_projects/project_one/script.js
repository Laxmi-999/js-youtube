 const buttons= document.querySelectorAll('.button');

 const body = document.querySelector('body');

 buttons.forEach( function (button) {
    console.log(buttons);
    

    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === "grey"){
            return body.style.backgroundColor ="grey";
        }
        if(e.target.id === "white"){
            return body.style.backgroundColor = 'white';
        }
        if(e.target.id === "blue"){
            return body.style.backgroundColor = 'blue';
        }
        if(e.target.id === "yellow"){
            return body.style.backgroundColor = 'yellow';
        }
    });
 });
