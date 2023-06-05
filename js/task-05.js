const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", inputChange);

function inputChange(event) {
    if (event.currentTarget.value !== "") {
        return nameOutput.textContent = event.currentTarget.value;
    }
    return nameOutput.textContent = "Anonymous!";
}