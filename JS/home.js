async function getPosts() {
  try {
    const repsonse = await fetch(
      "https://api.a1tech.store//wp-json/wp/v2/posts?_embed"
    );
    const result = await repsonse.json();

    for (let i = 0; i < result.length; i++) {
      document.querySelector(".carousel").innerHTML += `
            <div class="carousel__items">
                <a href="/details-page.html?id=${result[i].id}">
                    <img src="${result[i]._embedded["wp:featuredmedia"][0].source_url}" alt="album cover"/>
                    <h3>
                        ${result[i].title.rendered}
                    </h3>
                </a>
            </div>
            `;
    }
    /* ---------------------------------------- Carousel slider --------------------------------------------- */
    $(".carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'<span class="prev_arrow"><i class="fas fa-caret-left"></i></span>',
      nextArrow:'<span class="next_arrow"><i class="fas fa-caret-right"></i></span>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    var filtered = false;

    $(".js-filter").on("click", function () {
      if (filtered === false) {
        $(".filtering").slick("slickFilter", ":even");
        $(this).text("Unfilter Slides");
        filtered = true;
      } else {
        $(".filtering").slick("slickUnfilter");
        $(this).text("Filter Slides");
        filtered = false;
      }
    });

    // const slickPrev = document.querySelector(".slick-prev");
    // const slickNext = document.querySelector(".slick-next");

    // slickPrev.innerHTML = `
    //     <span class="fa-stack">
    //         <i class="fas fa-circle fa-stack-2x"></i>
    //         <i class="fas fa-angle-left fa-stack-1x fa-inverse"></i>
    //     </span>
    //     `;

    // slickNext.innerHTML = `
    //     <span class="fa-stack">
    //         <i class="fas fa-circle fa-stack-2x"></i>
    //         <i class="fab fa-angle-right fa-stack-1x fa-inverse"></i>
    //     </span>
    //     `;
    /* ---------------------------------------- Carousel slider -------------------------------------------- */

    /* ---------------------------------------- HideLoader -------------------------------------------- */
    const loaderContent = document.querySelector(".loader");

    setTimeout(function () {
      loaderContent.style.display = "none";
    });
    /* ---------------------------------------- /HideLoader ------------------------------------------- */
  } catch (error) {
    document.querySelector(".alert").innerHTML += thisIsAnAlert(
      "An error has occured",
      "danger"
    );
    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}
getPosts();
