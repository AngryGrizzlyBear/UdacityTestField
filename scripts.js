function add_doggo() {
    fetch("https://dog.ceo/api/breed/shiba/images")
        .then(function(response) {
            return response.json();
        })
        .then(function(imageObj) {
            show_image(imageObj.message[0], 500,500, "Doggo");
        });
}


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}