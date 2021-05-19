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
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts?_embed/' + postId);
        const result = await repsonse.json();

        document.title +=`
            ${result[0].title.rendered}
        `;
        
        document.querySelector('.container').innerHTML =`
            <div class="content">
                <h2>${result[0].title.rendered}</h2>
                <p>${result[0].content.rendered}</p>
                <p>${result[0].excerpt.rendered}</p>
            </div>
        `;
        /* ------------------------------------------ HideLoader ---------------------------------------------- */
        const loaderContent = document.querySelector('.loader')

        setTimeout( function() {
            loaderContent.style.display = "none";
        });
        /* ----------------------------------------- /HideLoader ---------------------------------------------- */
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