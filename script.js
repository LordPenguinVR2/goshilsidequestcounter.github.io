let count = 0;

const countDisplay = document.getElementById("count");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

minusButton.addEventListener("click", () => {
    count = Math.max(0, count - 1); // Prevent negative count
    countDisplay.textContent = count;
});

plusButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});


