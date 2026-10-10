export function readingTime() {
    const article = document.querySelector(".main-post");
    const output = document.querySelector("#reading-time");
    const seriesList = document.querySelector(".series-list")


if (!article || !output) return;

var words;
const articleWords = article.textContent.trim().split(/\s+/).length;

if (seriesList) {
    const seriesWords = seriesList.textContent.trim().split(/\s+/).length;
    words = articleWords - seriesWords
} else {
    words = articleWords
}

const minutes = Math.max(1, Math.ceil(words / 275));
output.textContent = `${minutes} minute read`;

}