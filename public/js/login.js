
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click',()=>{
    fetch('/login',{
        method:"post",
        body:JSON.stringify({
            "username":usernameInput.value,
            "password":passwordInput.value
        }),
        headers:{
            "Content-Type":"application/JSON"
        }
    })
    .then((response)=>{
        console.log(response)
    })
})
