function add_doggo() {
    fetch("https://dog.ceo/api/breed/shiba/images/random")
        .then(response => response.json())
        .then(show_image);
}


function show_image(dogObj) {
    const img = document.createElement("img");
    img.src = dogObj.message;
    img.width = 500;
    img.height = 500;
    img.alt = "doggo";
    img.id = 'doggo_image';

    const current_image = document.getElementById(img.id);
    if (current_image) {
        document.body.replaceChild(img, current_image);
    } else {
        document.body.appendChild(img);
    }
}