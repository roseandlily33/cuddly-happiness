const deletePost = async(event) => {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split("/").length - 1];
    console.log(id);
    const response = await fetch('api/posts', {
        method: 'DELETE'
    });
    if(response.ok){
        document.location.replace('/dashboard')
    } else {
        alert('Not able to delete the blog');
    }
    

}
document.querySelector('.deleteBtn').addEventListener('submit', deletePost);