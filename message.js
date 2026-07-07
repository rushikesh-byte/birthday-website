const title = document.getElementById("title");

const titleText = "Dear Diksha,";

let titleIndex = 0;

function typeTitle() {

    if (titleIndex < titleText.length) {

        title.innerHTML += titleText.charAt(titleIndex);

        titleIndex++;

        setTimeout(typeTitle, 70);

    } else {

        animateParagraphs();

    }

}

typeTitle();

function animateParagraphs() {

    const paragraphs = document.querySelectorAll(".line");
    const signature = document.querySelector(".signature-section");

    let paragraphIndex = 0;

    function showNextParagraph() {

        if (paragraphIndex >= paragraphs.length) {

            signature.classList.remove("hidden");
            return;

        }

        const p = paragraphs[paragraphIndex];

        p.classList.remove("hidden");

        const words = p.innerText.split(" ");

        p.innerHTML = "";

        let wordIndex = 0;

        function addWord() {

            if (wordIndex < words.length) {

                p.innerHTML += words[wordIndex] + " ";

                wordIndex++;

                setTimeout(addWord, 140);

            } else {

                paragraphIndex++;

                setTimeout(showNextParagraph, 600);

            }

        }

        addWord();

    }

    showNextParagraph();

}

function restartStory(){

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "index.html";

    },500);

}