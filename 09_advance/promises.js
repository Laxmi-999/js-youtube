
const promiseOne = new Promise(function(resolve,reject) {

    setTimeout(function(){
        console.log('promise One created');
        resolve();
        
    },1000)
});

promiseOne.then(function(){
    console.log('promise one resolved');
    
});


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise two created');
        resolve();
        
    },1000)
}).then(function(){
    console.log('promise two is resolved');
    
});


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        resolve({userName:"laxu", email:"laxu@gmail.com"});
        
    },1000)
})

promiseThree.then(function(user){

    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function()
    {
       let error = false;

       if(!error){
        resolve({userName:"luxxy", email:"luxxy@gmail.com"})
       }else{
        reject('ERROR:Somethig Went Wrong');
       }

    },1000);

});
promiseFour.then((user) =>{
    console.log(user);
    return user.userName;
}).then(function(username){
    console.log(username);
    
}).catch(function(error)
{
    console.log(error);
    
}).finally(() => console.log('promise is either resolved or rejected'));


const promiseFive = new Promise(function(resolve, reject){

    let error = false;
    if(!error){
        resolve({username:"js youtube", email:"youtube@gmail.com"});
    }else{
        reject("ERROR:JS went wrong");
    }
});

async function consumePromiseFive() {

   try {
        const response = await promiseFive
        console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }
    
}
consumePromiseFive();


// async function getAllData() {

//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')

//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log('E:',error);
        
//     }
    
// }
// getAllData();

//using promise format

fetch('https://api.github.com/users/hiteshchoudhary').then(function(response){

return response.json();
}).then(function(data){

    console.log(data);
    
}).catch((error) => console.log(error)
)