const login = async(e) => {
    //document.location.replace('/login');
    e.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    if(username && password){
    const response = await fetch('/api/users/login', {
        method:'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type' : 'application/json'}
    });
    if(response.ok){
        document.location.replace('/')
    } else {
        alert('Not able to login');
        return;
    }
    return;
}}

document.querySelector('#subLogin').addEventListener('click', login);