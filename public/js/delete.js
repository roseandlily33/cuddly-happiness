const deletePost = async(event) => {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split("/").length - 1];
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });
    
    if(response.ok){
        document.location.replace('/dashboard');
    } else {
        alert('Not able to delete the blog');
    }
}
document.querySelector('.deleteBtn').addEventListener('click', deletePost);
