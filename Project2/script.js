const form = document.querySelector('form');
const result = document.querySelector('#calculateBtn');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0) {
        result.textContent = "Please enter a valid height (cm)";
        result.style.color = "red";
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        result.textContent = "Please enter a valid weight (kg)";
        result.style.color = "red";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    if (bmi < 18.6) {
        result.textContent = `Your BMI is ${bmi} → Underweight`;
        result.style.color = "orange";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.textContent = `Your BMI is ${bmi} → Normal`;
        result.style.color = "green";
    } else {
        result.textContent = `Your BMI is ${bmi} → Overweight`;
        result.style.color = "red";
    }
});
