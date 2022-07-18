const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

run();

function run()  {
    text.innerHTML = 'Breathe In!';
    container.className = 'container grow'; // Sets 2 class names

    setTimeout(() => {
        text.innerText = 'Hold Breath';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(run, totalTime);