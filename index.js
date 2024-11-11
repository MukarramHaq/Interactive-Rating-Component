const buttonsEl = document.querySelectorAll('.rating-button')
const submitBtnEl = document.querySelector('.submit-btn');
const ratingContainerEl = document.querySelector('.rating-card');
const thanksContainerEl = document.querySelector('.thanks-card');
const ratingValueEl = document.getElementById('rating-value');

let rating;

buttonsEl.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        button.classList.add('active');
        rating = button.textContent;
    })
});

submitBtnEl.addEventListener('click', () => {
    ratingContainerEl.style.display = "none";
    thanksContainerEl.style.display = "block";

    ratingValueEl.textContent = rating;

});