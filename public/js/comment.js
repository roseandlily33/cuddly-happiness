const newComment = (event) => {
    event.preventDefault();
    const comment_content = document.querySelector('#newComment');
    const post_id = window.location.toString().split('/')[ window.location.toString().split("/").length - 1];
    console.log(post_id);
    if(comment_content){
        const response = fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment_content, post_id}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(response.ok){
            document.location.reload();
        } else {
            alert('Comment not added');
        }
    }
}
document.querySelector('.commentForm').addEventListener('submit', newComment);