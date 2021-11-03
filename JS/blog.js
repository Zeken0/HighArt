/* ----------------------------------------------- ShowMoreButton ----------------------------------------------- */
const showMoreBtn = document.querySelector(".btn");
const secondContent = document.querySelector(".containerTwo");

showMoreBtn.onclick = function toggleBtn() {
  secondContent.classList.toggle("containerTwoToggle");
  if (secondContent.classList.contains("containerTwoToggle")) {
    showMoreBtn.innerHTML = `
        Show Less
        `;
  } else {
    showMoreBtn.innerHTML = `
        Show More
        `;
  }
};
/* ----------------------------------------------- /ShowMoreButton ----------------------------------------------- */
let containerOne = document.querySelector(".container");
let containerTwo = document.querySelector(".containerTwo");

async function getData() {
  try {
    const repsonse = await fetch("https://highart.herokuapp.com/Artists/");
    const data = await repsonse.json();
    let artists = data;

    artists.forEach((artist) => {
      containerOne.innerHTML += `
            <div class="content">
                <a href="/details-page.html?id=${artist.id}">
                    <h1>
                        ${artist.albumName}
                    </h1>
                </a>
                <h2>
                    ${artist.artistName}  <i class="fas fa-user"></i>
                </h2>
                <p>
                    ${artist.startReview}
                </p>
                <a href="/details-page.html?id=${artist.id}">
                    <img src="${artist.albumCoverUrl}" alt="Image of an album cover"/>
                </a>
            </div>
            `;

      containerTwo.innerHTML += `
      <div class="content">
      <a href="/details-page.html?id=${artist.id}">
          <h1>
              ${artist.albumName}
          </h1>
      </a>
      <h2>
          ${artist.artistName}  <i class="fas fa-user"></i>
      </h2>
      <p>
          ${artist.startReview}
      </p>
      <a href="/details-page.html?id=${artist.id}">
          <img src="${artist.albumCoverUrl}" alt="Image of an album cover"/>
      </a>
  </div>
  `;
    });

    const searchInput = document.querySelector("#bar");
    searchInput.onkeyup = function () {
      let filteredArtists = artists.filter((artist) => {
        return artist.albumName
          .toLowerCase()
          .includes(this.value.toLowerCase());
      });

      containerOne.innerHTML = "";
      containerTwo.innerHTML = "";

      filteredArtists.forEach((artist) => {
        containerOne.innerHTML += `
            <div class="content">
                <a href="/details-page.html?id=${artist.id}">
                    <h1>
                        ${artist.albumName}
                    </h1>
                </a>
                <h2>
                    ${artist.artistName}  <i class="fas fa-user"></i>
                </h2>
                <p>
                    ${artist.startReview}
                </p>
                <a href="/details-page.html?id=${artist.id}">
                    <img src="${artist.albumCoverUrl}" alt="Image of an album cover"/>
                </a>
            </div>
            `;

        containerTwo.innerHTML += `
            <div class="content">
                <a href="/details-page.html?id=${artist.id}">
                    <h1>
                        ${artist.albumName}
                    </h1>
                </a>
                <h2>
                    ${artist.artistName}  <i class="fas fa-user"></i>
                </h2>
                <p>
                    ${artist.startReview}
                </p>
                <a href="/details-page.html?id=${artist.id}">
                    <img src="${artist.albumCoverUrl}" alt="Image of an album cover"/>
                </a>
            </div>
            `;
      });
    };

    /* ---------------------------------------- BackToTopButton --------------------------------------------- */

    const backToTopButton = document.querySelector(".up-btn");

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
      if (window.pageYOffset > 300) {
        if (!backToTopButton.classList.contains(".show")) {
          backToTopButton.classList.remove(".hide");
          backToTopButton.classList.add(".show");
          backToTopButton.style.display = "block";
        }
      } else {
        if (backToTopButton.classList.contains(".show")) {
          backToTopButton.classList.remove(".show");
          backToTopButton.classList.add(".hide");
          backToTopButton.style.display = "none";
        }
      }
    }

    backToTopButton.addEventListener("click", backToTop);

    function backToTop() {
      window.scrollTo(0, 0);
    }
    /* ---------------------------------------- /BackToTopButton ------------------------------------------- */

    /* ------------------------------------------ HideLoader ---------------------------------------------- */
    const loaderContent = document.querySelector(".loader");

    setTimeout(function () {
      loaderContent.style.display = "none";
      showMoreBtn.style.display = "block";
    });
    /* ----------------------------------------- /HideLoader ---------------------------------------------- */
  } catch (error) {
    document.querySelector(".alert").innerHTML += thisIsAnAlert(
      "An error has occured",
      "danger"
    );
  } finally {
    setTimeout(function () {
      document.querySelector(".alert").innerHTML = "";
    }, 3000);
  }
}
getData();
