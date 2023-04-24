const deletePost = async(event) => {
    event.preventDefault();
    const post_id = window.location.toString().split('/')[window.location.toString().split("/").length - 1];
    console.log(id);
    const response = await fetch(`/api/dashboard/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({post_id}),
        headers: {
            'Content-type': 'application/json'
        }
    });
    if(response.ok){
        document.location.replace('/dashboard')
    } else {
        alert('Not able to delete the blog');
    }
    

}
document.querySelector('.deleteBtn').addEventListener('submit', deletePost);