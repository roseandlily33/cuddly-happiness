const editBlog = async(event) => {
    event.preventDefault();
    const id = window.location.toString().split('/')[ window.location.toString().split("/").length - 1];

    const post_title = document.querySelector('#post_title');
    const post_content = document.querySelector('#post_content');
    console.log(post_title);
    console.log(post_content);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({post_title, post_content}),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.reload();
    } else {
        alert('Could not update the blog');
    }
}

document.querySelector('.submitUpdate').addEventListener('submit', editBlog);