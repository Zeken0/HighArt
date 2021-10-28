const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getPosts(postId) {
  try {
    console.log(postId);
    const repsonse = await fetch(
      "https://highart.herokuapp.com/Artists/" + postId
    );
    const data = await repsonse.json();

    document.title += `
                ${data.albumName}
            `;
    document.querySelector(".container").innerHTML = `
                <div class="content">
                    <h1>
                        ${data.albumName}
                    </h1>
                    <h2>
                        ${data.artistName} <i class="fas fa-user"></i>
                    </h2>
                    <p>
                        ${data.startReview}
                    </p>
                    <img class="zoom" src="${data.albumCoverUrl}" alt="Image of an album cover"/>
                    <div class="modal-container">
                        <img class="modal" src="${data.albumCoverUrl}" alt="Image of an album cover"/>
                    </div>
                    <p>
                        ${data.endReview}
                    </p>
                </div>
            `;

    /* ------------------------------------------ zoomEffect ---------------------------------------------- */
    const imgTooZoom = document.querySelector(".zoom");
    const modalContainer = document.querySelector(".modal-container");

    imgTooZoom.addEventListener("click", () => {
      modalContainer.classList.add("show");
    });

    modalContainer.addEventListener("click", () => {
      modalContainer.classList.remove("show");
    });
    /* ------------------------------------------ /zoomEffect ---------------------------------------------- */

    /* ------------------------------------------ hideLoader ---------------------------------------------- */
    const loaderContent = document.querySelector(".loader");

    setTimeout(function () {
      loaderContent.style.display = "none";
    });
    /* ----------------------------------------- /hideLoader ---------------------------------------------- */
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
getPosts(id);
