
let numberBox = document.querySelector("#numbeBox");
const plus = document.querySelector("#minus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#minus");

let my_number = 0;

plus.addEventListener('click', function () {
    let existing_number = numberBox.value;
    my_number = existing_number;
    my_number = my_number + 1;
    numberBox.value = my_number;
})

minus.addEventListener('click', () => {
    let existing_number = numberBox.value;
    my_number = existing_number;
    my_number = my_number - 1;
    numberBox.value = my_number;
})

reset.addEventListener('click', function () {
    my_number = 0;
    numberBox.value = my_number;
})
