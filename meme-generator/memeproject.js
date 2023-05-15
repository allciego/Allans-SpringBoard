const memebotton = document.querySelector("#create-meme");
memebotton.addEventListener('click', function (evt) {
    evt.preventDefault();
    const meme = document.createElement("div");
    const topInput = document.createElement("div");
    const img = document.createElement("img");
    const bottomInput = document.createElement("div");

    img.src = document.getElementById("imageLink").value;
    topInput.classList.add("topText");
    topInput.innerHTML = document.getElementById("topText").value;

    bottomInput.classList.add("bottomText");
    bottomInput.innerHTML = document.getElementById("bottomText").value;

    meme.classList.add("meme");
    meme.append(topInput);
    meme.append(img);
    meme.append(bottomInput);

    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

    document.getElementById("form").reset()
});