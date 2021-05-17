async function getPosts() {
    try {
        const repsonse = await fetch('https://api.a1tech.store//wp-json/wp/v2/posts');
        const result = await repsonse.json();  
        
        for (let i = 0; i < result.length; i++) {
            document.querySelector('.carousel').innerHTML += `
            <div class="carousel__items">
                <img src="/img/TrapSoul.jpg" alt="album cover">
                <a href="/details-page.html?id=${result[i].id}">
                    <h3>${result[i].title.rendered}</h3>
                </a>
            </div>
            `;
            if (i === 5) {
                break
            }
        };
        /* ---------------------------------------- Carousel slider --------------------------------------------- */
        $('.carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
                },
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
        
        var filtered = false;
        
        $('.js-filter').on('click', function(){
            if (filtered === false) {
            $('.filtering').slick('slickFilter',':even');
            $(this).text('Unfilter Slides');
            filtered = true;
            } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
            }
        });
        /* ---------------------------------------- Carousel slider -------------------------------------------- */

         /* ---------------------------------------- HideLoader -------------------------------------------- */
        const loaderContent = document.querySelector('.loader')

        setTimeout( function() {
            loaderContent.style.display = "none";
        });
        /* ---------------------------------------- /HideLoader ------------------------------------------- */
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