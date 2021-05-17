/* ----------------------------------------------- ShowMoreButton ----------------------------------------------- */
let toggled = true;
function toggleBtn(){
    document.querySelector(".containerTwo").classList.toggle("containerTwoToggle");
    document.querySelector(".btn").innerHTML = `
    Show Less
    `;
}
/* ----------------------------------------------- /ShowMoreButton ----------------------------------------------- */
async function getPosts() {
    try {
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts');
        const result = await repsonse.json(); 
        
        for (let i = 0; i < result.length; i++) {
            document.querySelector('.container').innerHTML += `
            <div class="content">
                <a href="/details-page.html?id=${result[i].id}">
                    <h2>
                        ${result[i].title.rendered}
                    </h2>
                </a>
                <p>
                    ${result[i].content.rendered}
                </p>
                <img src="${result[i]}" alt=".">
                <p>
                    ${result[i].excerpt.rendered}
                </p>
            </div>
            `;

            document.querySelector('.containerTwo').innerHTML += `
            <div class="content">
                <a href="/details-page.html?id=${result[i].id}">
                    <h2>
                        ${result[i].title.rendered}
                    </h2>
                </a>
                <p>
                    ${result[i].content.rendered}
                </p>
                <img src="${result[i]}" alt=".">
                <p>
                    ${result[i].excerpt.rendered}
                </p>
            </div>
            `;
        }
        /* ---------------------------------------- BackToTopButton --------------------------------------------- */
        
        const backToTopButton = document.querySelector('.up-btn');
        
        window.addEventListener('scroll', scrollFunction);

        function scrollFunction() {
            if (window.pageYOffset > 300) {
                if (!backToTopButton.classList.contains(".show")) {
                    backToTopButton.classList.remove(".hide")
                    backToTopButton.classList.add(".show")
                    backToTopButton.style.display = "block";
                }
            } else {
                if (backToTopButton.classList.contains(".show")) {
                    backToTopButton.classList.remove(".show")
                    backToTopButton.classList.add(".hide")
                    backToTopButton.style.display = "none";
                }
            }
        }

        backToTopButton.addEventListener('click', backToTop);

        function backToTop() {
            window.scrollTo(0,0);
        }
        /* ---------------------------------------- /BackToTopButton -------------------------------------------- */
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