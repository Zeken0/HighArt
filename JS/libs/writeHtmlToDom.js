export default function writeHtmlToDom(
  theDomElementToTarget,
  htmlToInsertIntoTheDom
) {
  theDomElementToTarget.innerHTML += `
    <div class="content">
        <a href="/details-page.html?id=${htmlToInsertIntoTheDom.id}">
            <h1>
                ${htmlToInsertIntoTheDom.albumName}
            </h1>
        </a>
        <h2>
            ${htmlToInsertIntoTheDom.artistName}  <i class="fas fa-user"></i>
        </h2>
        <p>
            ${htmlToInsertIntoTheDom.startReview}
        </p>
        <a href="/details-page.html?id=${htmlToInsertIntoTheDom.id}">
            <img src="${htmlToInsertIntoTheDom.albumCoverUrl}" alt="Image of an album cover"/>
        </a>
    </div>
    `;
}
