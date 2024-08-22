const uselessVar1 = 12345;
const meaninglessString = "ThisIsNotTheSolution";

function fakeFunction1() {
    return uselessVar1 * 2;
}

function fakeFunction2(str) {
    return str.split('').reverse().join('');
}

const fakeEncodedSolution = 'Tm90VGhlU29sdXRpb24=';

const notTheKey = [
    'SG',
    '9s',
    'YSE',
    'gRn',
    'JlbWR',
    'lcg=='
].join('');

const distractions = [
    fakeFunction1(),
    fakeFunction2(meaninglessString),
    atob(fakeEncodedSolution),
    Math.random() * 1000,
];

const notTheAnswer = atob(notTheKey);

document.getElementById('solution').textContent = notTheAnswer;

document.getElementById('solution').addEventListener('click', function() {
    document.body.style.backgroundColor = '#fff';
    this.style.color = '#000';
});

(function() {
    let someVar = 0;
    for (let i = 0; i < 10; i++) {
        someVar += i;
    }
})();

function revealSolution() {
    const scrambledSolution = atob(notTheKey);
    document.getElementById('solution').textContent = scrambledSolution;
}

const decoyVar = atob(fakeEncodedSolution);
const anotherDecoy = fakeFunction2(decoyVar);

document.getElementById('solution').addEventListener('click', function() {
    let garbageVar = 'JustRandomText';
    for (let i = 0; i < 5; i++) {
        garbageVar += i;
    }
    revealSolution();
    
    document.body.style.backgroundColor = '#fff';
    this.style.color = '#000';
});

(function fakeInit() {
    const irrelevant = [
        fakeFunction1(),
        fakeFunction2(meaninglessString)
    ];
})();