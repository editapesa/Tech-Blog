const delBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog post');
        }
    }
};

const updateFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-post-title').value.trim();
    const contents = document.querySelector('#edit-post-content').value.trim();

    if (title && contents) {
        const response = await fetch(`/api/blogs`, {
            method: 'PUT',
            body: JSON.stringify({ title, contents }),
            headers:{
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog post');
        }
     }
};

document 
    .querySelector('.blog-list')
    .addEventListener('click', delBtnHandler);

document
    .querySelector('.blog-list')
    .addEventListener('submit', updateFormHandler);