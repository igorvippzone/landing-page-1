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

        var myPlacemark = new ymaps.Placemark([55.737826, 37.594504], {
            iconContent: '119034, Россия, Москва, пер. Кропоткинский, 4',
            // iconLayout: 'default#image',
            iconImageHref: "./assets/icons/location.png",
            iconImageSize: [30, 44],
            iconImageOffset: [-15, -44]
        });
        myMap.geoObjects.add(myPlacemark);
        // myMap.balloon.open([55.737826, 37.594504], "119034, Россия, Москва, пер. Кропоткинский, 4", {
        //     // Опция: не показываем кнопку закрытия.
        //     closeButton: false
        // });



    }
}


//form
const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function (event) {
    // event.preventDefault();
    //
    // const data = new FormData(form);
    // let userName;
    // let userEmail;
    // for (const [name, value] of data) {
    //     if (name === 'name') {
    //         userName = value
    //     }
    //     if (name === 'email') {
    //         userEmail = value
    //     }
    //
    // }
});