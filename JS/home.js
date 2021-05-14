async function getPosts() {
    try {
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts');
        const result = await repsonse.json();  
        
        for (let i = 0; i < result.length; i++) {

            document.querySelector('.carousel').innerHTML += `
            <div class="carousel__item carousel__item--visible">
                <img src="/img/TrapSoul.jpg" alt="album cover">
                <a href="/details-page.html?id=${result[i].id}">
                    <h3>${result[i].title.rendered}</h3>
                </a>
            </div>
            <div class="carousel__actions">
                <button class="carousel__button--prev" aria-label="previous slide">
                    <i class="fas fa-chevron-circle-left"></i>
                </button>
                <button class="carousel__button--next" aria-label="next slide">
                    <i class="fas fa-chevron-circle-right"></i>
                </button>
            </div>
            `;
        };
        /* ---------------------------------------- Carousel slider --------------------------------------------- */
        let slidePosition = 0;
        const slides = document.querySelector('.carousel__item');
        const totalSlides = slides.length;

        document.querySelector('.carousel__button--prev').addEventListener("click", function() {
            moveToPrevSlide();
        });
        document.querySelector('.carousel__button--next').addEventListener("click", function() {
            moveToNextSlide();
        });

        function updateSlidePosition() {
            for (let slide of slides) {
                slide.classList.remove('carousel__item--visible');
                slide.classList.add('carousel__item--hidden');
            }
            slides[slidePosition].classList.add('carousel__item--visible');
        }

        function moveToNextSlide() {
            if (slidePosition === totalSlides - 1) {
                slidePosition = 0;
            } else {
                slidePosition++;
            }
            updateSlidePosition();
        }

        function moveToPrevSlide() {
            if (slidePosition === 0) {
                slidePosition = totalSlides - 1;
            } else {
                slidePosition--;
            }
            updateSlidePosition();
        }
        /* ---------------------------------------- Carousel slider --------------------------------------------- */
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
