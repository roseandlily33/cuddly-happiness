const signup = async(e) => {
    e.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if(username && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok){
            document.location.replace('/')
        } else {
            alert('Failed to sign up')
        }
    }
};

document.querySelector('.signupForm').addEventListener('submit', signup);