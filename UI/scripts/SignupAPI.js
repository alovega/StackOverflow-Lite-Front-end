window.addEventListener("load", powerOn);
function powerOn(){
    document.getElementById('submit').addEventListener("click", user);
}
function user(){
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    fetch('http://127.0.0.1:5000/auth/signup',{
        method:'POST',
        headers:{
         'Accept':'application/json',
         'Content-type': 'application/json;charset=UTF-8'  
        },
        body:JSON.stringify({email:email, username:username, password:password})
    })
    .then(function(response){
        if(!response.ok){
            throw Error(response.status.text);
        }
        return response.json();
    })
    
    .then(function (data){
        console.log(data)})

    .catch(function(error){
        console.log('Looks like there was a problem:\n',error)
    })
}