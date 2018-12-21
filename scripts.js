function add_doggo() {
    fetch("https://dog.ceo/api/breed/shiba/images/random")
        .then(response => response.json())
        .then(show_image);
}

function show_image({message}) {
    const current_image = document.getElementById("static-doggo");
    current_image.src = message
}

add_doggo();