const container = document.querySelector(".container");
createGrid(16);

// Make sure that 'size' is a valid number.
function createGrid(size) {
    console.groupCollapsed(`New grid (${size}x${size})`);
    console.log(`Grid distribution: ${100 / size}%`);
    console.groupEnd();

    for (let i = 0; i < size; i++) {;
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.className = "grid-div";
            div.addEventListener("mouseover", function() {
                div.classList.add("hovered");
            });
            div.style.flex = "1 1 " + (100 / size) + "%";
            container.appendChild(div);
        }
    }
}

const newButton = document.getElementById("new-btn");
newButton.addEventListener("click", function(){
    let newSize;
    let error = false;
    do {
        newSize = prompt("Enter the number of squares per side:");
        
        if(newSize == null) {
            break;
        }
        
        newSize = Number(newSize);
        
        if(!Number.isInteger(newSize) || newSize < 2 || newSize > 100) {
            alert("Please enter a number between 2 and 100.");
            error = true;
            continue;
        }

        error = false;
        document.querySelectorAll(".grid-div").forEach(el => el.remove());
        createGrid(newSize);
    } while(error)
});