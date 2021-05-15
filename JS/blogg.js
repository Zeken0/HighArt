let toggled = true;
function toggleBtn(){
            document.querySelector(".containerTwo").classList.toggle("containerTwoToggle");
            document.querySelector(".btn").innerHTML = `
            Show Less
            `;
}

// document.querySelector('.up-btn').onclick = function (e) {
//     e.preventDefault();
// }

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

// function toggleBtn(){
//     let addContentTwo = document.querySelector(".containerTwo");
//     addContentTwo.classList.toggle("containerTwoToggle")
// }