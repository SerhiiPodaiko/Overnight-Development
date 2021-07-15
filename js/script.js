document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    new WOW().init();

    //BURGER MENU
    $('.burger').click(function () {
        $('.burger, .menu').toggleClass('active');
    });

    //PROGRESS BAR
    $(window).scroll(function () {
        let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#progress-bar").width(ratio + '%');
    });

    //BTN TO TOP
    let btnTop = document.getElementById('btn-top');
    window.addEventListener('scroll', () => {

        if (window.scrollY >= 700) {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    });

    btnTop.addEventListener('click', () => {
        $("html,body").animate({ scrollTop:0 },900);
    });

    //SLIDER
    let tabHeader = document.getElementsByClassName('tab-header')[0];
    let tabBody = document.getElementsByClassName('tab-body')[0];

    let tabsPane = tabHeader.getElementsByTagName('div');

    for (let i = 0; i < tabsPane.length; i++) {
        tabsPane[i].addEventListener('click', () => {
            tabHeader.getElementsByClassName('active')[0].classList.remove('active');
            tabsPane[i].classList.add('active');

            tabBody.getElementsByClassName('active')[0].classList.remove('active');
            tabBody.getElementsByTagName('section')[i].classList.add('active');
        })
    }

//    FORM VALIDATION
    const form = document.querySelector('form');
    let isValidate = false;
    const regExpName = /^[a-z0-9_-]{3,16}$/;
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

    const submit = () => {
        alert('Дані відправлено!');
    };

    const validateElem = (elem) => {
        if (elem.name === 'name') {
            if (!regExpName.test(elem.value) && elem.value !== '') {
                elem.nextElementSibling.textContent = 'Введіть коректне ім\'я користувача!';
                isValidate = false;
            }
            else {
                elem.nextElementSibling.textContent = '';
                isValidate = true;
            }
        }
        if (elem.name === 'email') {
            if (elem.name === 'email') {
                if (!regExpEmail.test(elem.value) && elem.value !== '') {
                    elem.nextElementSibling.textContent = 'Введіть коректний E-mail!';
                    isValidate = false;
                }
                else {
                    elem.nextElementSibling.textContent = '';
                    isValidate = true;
                }
            }
        }
    };

    for (let elem of form.elements) {
        if (!elem.classList.contains('form-check-input') && elem.tagName !== 'BUTTON') {
            elem.addEventListener('blur', () => validateElem(elem));
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        for (let elem of form.elements) {
            if (!elem.classList.contains('form-check-input') && elem.tagName !== 'BUTTON') {
                if (elem.value === '') {
                    elem.nextElementSibling.textContent = 'Дане поле не заповнено!';
                    isValidate = false;
                }
                else {
                    elem.nextElementSibling.textContent = '';
                    isValidate = true;

                }
            }
        }

        if (isValidate) {
            if (form.querySelector('.form-check-input').checked) {
                submit();
                form.reset();
            }
            else {
                alert('Дайте згоду!')
            }
        }

    })

});


