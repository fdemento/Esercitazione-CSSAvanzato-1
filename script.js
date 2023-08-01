// Esercizio 1:
// Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automaticamente.

// 

function eraseTwitter() {

    document.querySelector(".list-unstyled:not(.mb-0) li:nth-of-type(2)").style.visibility = 'hidden'
}

window.onload = eraseTwitter() //

// Esercizio 2:
// Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

function removeFather(){
    document.addEventListener('DOMContentLoaded', function() {
        let clickableElements = document.querySelectorAll('.stretched-link');

        clickableElements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                event.target.parentNode.remove();
            });
        });
    });
}

// Esercizio 3:
// Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

function showAuthor() {

    let authors = document.querySelectorAll(".blog-post-meta a").innerText
}

console.log(showAuthor()) //