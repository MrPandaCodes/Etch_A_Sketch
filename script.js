const wrapper = document.querySelector(".wrapper");

function display() {
    for (i = 0; i < 16; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", `d${i}`);
        wrapper.appendChild(newDiv);
        console.log("working");
    }
}
display();