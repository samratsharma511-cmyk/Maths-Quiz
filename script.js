let randomNum1 = Math.floor(Math.random() * 10);
let randomNum2 = Math.floor(Math.random() * 10);
let a = document.getElementById('num1');
let b = document.getElementById('num2');
a.innerText = randomNum1;
b.innerText = randomNum2;
let inp = document.getElementById('answerinput');
let btn = document.getElementById('btn');
let score = document.getElementById('score');
let s = 0;
btn.addEventListener('click', () => {
    let correctAnswer = randomNum1 * randomNum2;
    if (inp.value == correctAnswer) {
        s += 1;

        confetti({
            particleCount: 1000,
            spread: 300,
            origin: {y: 0.5 },
        });
    } else {
        s -= 1;
    }
    score.textContent = s;
    randomNum1 = Math.floor(Math.random() * 10);
    randomNum2 = Math.floor(Math.random() * 10);
    a.innerText = randomNum1;
    b.innerText = randomNum2;
    inp.value = '';
});
