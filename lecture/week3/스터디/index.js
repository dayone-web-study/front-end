const title = document.querySelector(".title");
title.textContent = "안녕하세요";

const something = document.querySelector(".something");
something.value = "ASDF";

const button = document.getElementsByClassName("clickMe")[0];
console.log(button);
button.addEventListener("click", () => {
    console.log("HI");
});
