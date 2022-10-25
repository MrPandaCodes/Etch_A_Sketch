const wrapper = document.querySelector(".wrapper");
const boxPopButton = document.querySelector(".box-number");
let idRegexp = new RegExp(/[^d]\d*/, "g");
let oldDisplay;
let dialog;
let applyBut;
let inputBoxNumb;
let boxObject = new Object;

boxPopButton.addEventListener("click", e => {
    promptBoxNumber = prompt("Number of boxes for an edge:");
    console.log("prompt works");
    if (promptBoxNumber) {
        oldDisplay = document.querySelectorAll(".wrapper > div");
        Array.from(oldDisplay).forEach(e => e.remove());
        display(promptBoxNumber);
    }
});

function randomColor() {
    return `${Math.floor(Math.random()*360)}`
}


function display(numberOfSquares) {
    if (!numberOfSquares) {
        for (i = 0; i < 16 * 16; i++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", `d${i}`);
            wrapper.appendChild(newDiv);
            console.log("working1");
        }

    } else if (numberOfSquares > 100) {
        window.alert("Box Number Cannot Be Bigger Than 100");
        for (i = 0; i < 16 * 16; i++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", `d${i}`);
            wrapper.appendChild(newDiv);
        }
    } else {
        for (i = 0; i < numberOfSquares * numberOfSquares; i++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", `d${i}`);
            wrapper.setAttribute("style", `display:grid; grid-template:repeat(${numberOfSquares},calc(100vh/${numberOfSquares})) / repeat(${numberOfSquares},calc(100vw/${numberOfSquares}))`)
            wrapper.appendChild(newDiv);
            console.log("working2");
        }
    }
    Array.from(document.querySelectorAll(".wrapper > div")).map(e => e.id).forEach((e) => {
                boxObject[`${e}`] = {
                    count: 0,
                    colorHue: 0,
                    color: 0,
                }
                boxObject[`${e}`].colorHue = randomColor();
                boxObject[`${e}`].color = `hsl(${randomColor()},50%,50%,${boxObject[`${e}`].count/10})`;
        }
    );
    console.table(boxObject);
}

function boxPainter(boxActive) {
    oldDisplay = document.querySelectorAll(".wrapper > div");

    let currentBoxId = boxActive.id;
    if (boxObject[currentBoxId].count < 11) { boxObject[currentBoxId].count++; };
    
    boxObject[currentBoxId].color = `hsl(${boxObject[currentBoxId].colorHue},50%,50%,${boxObject[currentBoxId].count/10})`;

    boxActive.style.backgroundColor = boxObject[currentBoxId].color;

    if (Array.from(oldDisplay).includes(boxActive)) {
        console.log("painter works")

    }
}
document.addEventListener("mouseover", e => boxPainter(e.target));
window.addEventListener("load", display(0));