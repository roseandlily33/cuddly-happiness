const newComment = async(event) => {
    event.preventDefault();

    const comment_content = document.querySelector('#newComment').value.trim();

    const post_id = window.location.toString().split('/')[ window.location.toString().split("/").length - 1];
    console.log(post_id);
    console.log(comment_content);

    if(comment_content){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({post_id, comment_content}),
            headers: {
                'Content-Type': 'application/json'
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