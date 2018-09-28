document.getElementById('submit').addEventListener('click', user);

function user(){
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    fetch('http://127.0.0.1:5000/api/v1/auth/signup',{
        method:'POST',
        headers:{
         'Accept':'application/json, text/plain, */*',
         'Content-type': 'application/json;charset=UTF-8'  
        },
        body:JSON.stringify({email:email, username:username, password:password})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}