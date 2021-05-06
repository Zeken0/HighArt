async function getPosts() {
    try {
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts');
        const jsonResults = await repsonse.json();
        const result = jsonResults;
        
        for (let i = 0; i < result.length; i++) {

            document.querySelector('.container').innerHTML += `
            <div class="">
            <h2>${result[i].title.rendered}</h2>
            <p>${result[i].content.rendered}</p>
            <p>${result[i].excerpt.rendered}</p>
            </div>
            `;
        }
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
getPosts();