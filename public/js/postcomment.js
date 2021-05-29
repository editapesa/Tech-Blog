const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    if (comment) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers:{
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blog');
        } else {
            alert('Failed to create a comment');
        }
     }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);