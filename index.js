const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "triangle-4",
    "circle",
];

const colors = [
    "linear-gradient( to bottom , #4e14b8, #2eb2b0)",
    "linear-gradient( to bottom right , #b82514, #5a0dce)",
    "linear-gradient( to left , #50e297, #d185c0)",
    "linear-gradient( to bottom left , #5059e2, #add345)",
    "linear-gradient( to bottom left , #50b6e2, #d34553)",
];
const boxes = document.querySelectorAll(".container div");

let generate = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundImage = colors[j];
    });
};

btn.addEventListener("click", generate);
window.addEventListener("load", generate);