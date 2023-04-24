//const newComment = (event) => {
    event.preventDefault();
    const commentContent = document.querySelector('#newComment');
    if(commentContent){
        const response = fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment})
        })
    }


//}
document.querySelector('.commentForm').addEventListener('submit', newComment);