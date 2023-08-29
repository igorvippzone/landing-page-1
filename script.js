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


if (ymaps) {

    ymaps.ready(init);

    function init() {

        const myMap = new ymaps.Map('map', {
            center: [55.737826, 37.594504],
            zoom: 15,
            controls: [],

        });
        console.log(myMap)
        myMap.behaviors.disable('scrollZoom')
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('dblClickZoom');


        const placemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContentBody: `<div class="balloon-root">
                <img src="./assets/icons/location.png"/>
                <span>119034, Россия, Москва, пер. Кропоткинский, 4</span>
                </div>`,
        }, {

            balloonCloseButton: false,
            color: 'red'
        });
        myMap.geoObjects.add(placemark);
        placemark.balloon.open();

    }
}


//form
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const form = document.getElementById('feedbackForm');
const submitBtn = form.querySelector('.feedback-button')
const inputs = form.querySelectorAll('.custom-input')
let isPushBtnSubmit = false;
let isValid = true
let wrapperEmail = null;
let wrapperName = null;

submitBtn.addEventListener('click', () => {
    if (!isPushBtnSubmit) {
        isPushBtnSubmit = true;
    }
})

inputs.forEach(customInput => {
    const input = customInput.querySelector('input')
    const clearBtn = customInput.querySelector('.clear-input')

    if (input.name === 'email') {
        wrapperEmail = customInput
    }
    if (input.name === 'name') {
        wrapperName = customInput
    }

    clearBtn.addEventListener('click', () => {
        input.value = ''
    })

    input.addEventListener('input', (e) => {
        if (input.name === 'email') {
            if (isPushBtnSubmit) {
                const isValid = validateEmail(e.target.value)
                if (isValid) {
                    customInput.classList.remove('error')
                    submitBtn.disabled = false
                } else {
                    customInput.classList.add('error')
                    submitBtn.disabled = true
                }
            }
        }


        if (e.target.value) {
            clearBtn.classList.add('show')
        } else {
            clearBtn.classList.remove('show')
        }

    })

})

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event)
    const data = new FormData(form);
    let userName;
    let userEmail;
    for (const [name, value] of data) {
        if (name === 'name') {
            userName = value
        }
        if (name === 'email') {
            if (validateEmail(value)) {
                isValid = true
                userEmail = value
            } else {
                isValid = false;
                submitBtn.disabled = true
                wrapperEmail.classList.add('error')

            }
        }
    }

    if (isValid) {
        console.log('try')
        window.location.href = `mailto:mail@example.org?body=name:${userName}, email:${userEmail}`;

        wrapperEmail.querySelector('input').value = ''
        wrapperName.querySelector('input').value = ''
    }
});