const form = document.querySelector('form');

// this usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
     e.preventDefault();

     const height = parseInt(document.querySelector('#height').value);
     const weight = parseInt(document.querySelector('#weight').value);
     const result= document.querySelector('#result');

     if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `please enter the valid height ${height}`
     }
    else if(weight === '' || weight<0 || isNaN(weight))
     {
        result.innerHTML = `please enter the valid height ${weight}`
     }
     else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        
        let message = "";

        if(result < 18.6 ){
         message = "underweight"
        }
        else if(result >18.6 && result < 24.9){
            message = "normal weight"

        }else{
            message = "overweight"

        }
         // to show the result
         result.innerHTML = `<span>${bmi}</span>
         <br><span>${message}</span>`;

     }

} )