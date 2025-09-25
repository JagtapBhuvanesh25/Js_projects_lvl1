let rand_no = Math.ceil(Math.random() * 50);
const rem_attempts = document.getElementById('final');
const choices = document.getElementById('prev');
const userinput = document.getElementById('nums');
const submit = document.getElementById('submitbtn');
const result = document.getElementById('curr');
const form = document.querySelector('form');

let attempts = 10;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const input = Number(userinput.value);

    if (isNaN(input)) {
        result.innerHTML = "❌ Please enter a valid number";
    } 
    else if (input === rand_no) {
        result.innerHTML = `🎉 Hooray! Correctly guessed. Number was ${input}`;
        attempts = 10;
        rem_attempts.innerHTML = attempts;
        rand_no = Math.ceil(Math.random() * 50);
        choices.innerHTML = "";
    } 
    else {
        attempts--;
        if (attempts > 0) {
            result.innerHTML = input < rand_no ? "Too Low! Try again" : "Too High! Try again";
            choices.innerHTML += input + " ";
            rem_attempts.innerHTML = attempts;
        } else {
            result.innerHTML = `💀 Game Over! The number was ${rand_no}`;
            attempts = 10;
            rem_attempts.innerHTML = attempts;
            rand_no = Math.ceil(Math.random() * 50);
            choices.innerHTML = "";
        }
    }

    userinput.value = "";
    userinput.focus();
});
