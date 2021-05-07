const queryString = document.location.search;
console.log(queryString);
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
console.log(params);
// get the id parameter from the query string
const id = params.get('id');

async function getPosts(postId) {
    try {
        console.log(postId);
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts/' + postId);
        const result = await repsonse.json();

            document.title +=`
            ${result.title.rendered}
            `;

            document.querySelector('.container').innerHTML =`
            <h2>${result.title.rendered}</h2>
            <p>${result.content.rendered}</p>
            <p>${result.excerpt.rendered}</p>
            `;

    } catch (error) {
        document.querySelector('.alert').innerHTML += thisIsAnAlert(
            'An error has occured',
            'danger'
        );
        console.log(error);
    } finally {
        setTimeout( function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};
getPosts(id);