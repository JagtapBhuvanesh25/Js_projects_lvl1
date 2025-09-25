const buttons = document.querySelectorAll(".boxes");
const body = document.body;
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const bgc = body.style.backgroundColor;
        body.style.backgroundColor = e.target.id;
        e.target.id = bgc;
        e.target.style.backgroundColor = bgc;
    });
});
