async function getPosts() {
  try {
    const repsonse = await fetch("http://localhost:1337/Artists");
    const data = await repsonse.json();

    data.forEach((artist) => {
      document.querySelector(".carousel").innerHTML += `
            <div class="carousel__items">
                <a href="/details-page.html?id=${artist.id}">
                    <img src="${artist.albumCoverUrl}" alt="Image of an album cover"/>
                    <h3>
                        ${artist.albumName}
                    </h3>
                </a>
            </div>
            `;
    });
    /* ---------------------------------------- Carousel slider --------------------------------------------- */
    $(".carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:
        '<span class="prev_arrow"><i class="fas fa-caret-left"></i></span>',
      nextArrow:
        '<span class="next_arrow"><i class="fas fa-caret-right"></i></span>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
