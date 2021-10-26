const container = document.querySelector(".container");
const coffees = [{
        name: "Rosas azules",
        Image: "images/image1.1.jpg"
    },
    {
        name: "Amanecer Dorado",
        Image: "images/image2.1.jpg"
    },
    {
        name: "AstaxLiebe",
        Image: "images/image3.jpg"
    },
    {
        name: "Leones Carmesies",
        Image: "images/image4.1.jpg"
    },
    {
        name: "Zora Toros",
        Image: "images/image5.jpg"
    },
    {
        name: "Dante Triada",
        Image: "images/image6.1.jpg"
    },
    {
        name: "Toros Negros",
        Image: "images/image7.jpg"
    },
    {
        name: "Trebol de 5 Hojas",
        Image: "images/image8.jpg"
    },
    {
        name: "Asta",
        Image: "images/image9.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, Image }) =>
        (output += `
                        <div class="card">
                            <img class="card--avatar" src=${Image} />
                            <h1 class="card--title">${name}</h1>
                            <a class="card--link" href="#">Link</a>
                            </div>
                            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}