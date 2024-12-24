const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {;
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.className = "grid-div";
        div.addEventListener("mouseover", function() {
            div.classList.add("hovered");
        });

        container.appendChild(div);
    }
}