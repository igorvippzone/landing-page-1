
//accordeon
const accordeon = document.querySelector('#accordeon')
const accordeonItems = accordeon.querySelectorAll('.accordeon-item');

accordeonItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            accordeonItems.forEach(item => item.classList.remove('active'))
            item.classList.add('active');
        }

    })
})

//scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }

    })
})


//    custom-select
const select = document.querySelector(".custom-select");
const trigger = select.querySelector(".select-trigger");
const options = select.querySelectorAll(".options li");

trigger.addEventListener("click", function () {
    select.classList.toggle("open");
});

options.forEach(option => {
    option.addEventListener("click", function () {
        const prevValue = trigger.dataset.select
        const value = option.dataset.value;

        trigger.dataset.select = value;
        option.dataset.value = prevValue;

        select.classList.remove("open");
    });
});

document.addEventListener("click", function (e) {
    if (!select.contains(e.target)) {
        select.classList.remove("open");
    }
});

