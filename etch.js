
let input = document.getElementById("myRange");
let range = input.value;
let r = document.getElementById("r");
r.textContent = range + " X " + range;
let mGrid = document.getElementById("mGrid");
let pixel = [];

draw(range);

input.addEventListener("input", () => {
    range = input.value;
    r.textContent = range + " X " + range;
    mGrid.innerHTML = ``;
    draw(range);
});
function draw(n) {
    let size = 600 / n;
    for(let i = 0; i < n * n; i++)
    {
        pixel[i] = document.createElement("div");
        pixel[i].style.height = `${size}px`;
        pixel[i].style.width = `${size}px`;
        mGrid.appendChild(pixel[i]);
        pixel[i].addEventListener("dragenter", () => {
            pixel[i].style.backgroundColor = "red";
        });
    }
}
