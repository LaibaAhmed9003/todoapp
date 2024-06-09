let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');
let placeholderImage = document.querySelector('#placeholderImage');

// Function to toggle the image based on the list items
function toggleImage() {
    if (list.children.length === 0) {
        placeholderImage.style.display = 'block'; // Show the image
    } else {
        placeholderImage.style.display = 'none'; // Hide the image
    }
}

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputValue) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputValue} <i class="remove"></i>`;

    listItem.addEventListener("click", function() {
        this.classList.toggle('done');
    });

    listItem.querySelector(".remove").addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click from toggling the 'done' class
        listItem.remove();
        toggleImage();
    });

    list.appendChild(listItem);
    toggleImage();
};

// Initial call to set the correct state
toggleImage();
