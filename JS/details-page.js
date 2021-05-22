const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPosts(postId) {
    try {
        console.log(postId);
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts/' + postId + '?_embed');
        const result = await repsonse.json();

            document.title =`
                ${result.title.rendered}
            `;
            document.querySelector('.container').innerHTML =`
                <div class="content">
                    <h2>
                        ${result.title.rendered}
                    </h2>
                    <h3>
                        ${result.slug} <i class="fas fa-user"></i>
                    </h3>
                    <p>
                        ${result.content.rendered}
                    </p>
                    <img class="zoom" src="${result._embedded['wp:featuredmedia'][0].source_url}"/>
                    <div class="modal-container">
                        <img class="modal" src="${result._embedded['wp:featuredmedia'][0].source_url}"/>
                    </div>
                    <p>
                        ${result.excerpt.rendered}
                    </p>
                </div>
            `;

        /* ------------------------------------------ zoomEffect ---------------------------------------------- */
        const imgTooZoom = document.querySelector('.zoom');
        const modalContainer = document.querySelector('.modal-container');

        imgTooZoom.addEventListener('click', () => {
            modalContainer.classList.add('show')
        });
        
        modalContainer.addEventListener('click', () => {
            modalContainer.classList.remove('show')
        });
        /* ------------------------------------------ /zoomEffect ---------------------------------------------- */
        
        /* ------------------------------------------ hideLoader ---------------------------------------------- */
        const loaderContent = document.querySelector('.loader')

        setTimeout( function() {
            loaderContent.style.display = "none";
        });
        /* ----------------------------------------- /hideLoader ---------------------------------------------- */
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