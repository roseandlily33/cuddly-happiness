const newBlog = async(event) => {
    event.preventDefault();
    const post_title = document.querySelector('#blogTitle').value.trim();
    const post_content = document.querySelector('#blogContent').value.trim();
    if(post_title && post_content){
        const response = await fetch('/newBlog', {
            method: 'POST',
            body: JSON.stringify({post_title, post_content}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(response.ok){
            document.location.replace('/dashboard');
            console.log('Created the blog');
        } else {
            alert('Not ablog to create the blog post');
        }

    } else {
        alert('Need a title and content for your blog');
    }
}
document.querySelector('#newBlogBtn').addEventListener('submit', newBlog);