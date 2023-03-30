"use strict";

// Loader
(() => {
    const loadAnimation = document.querySelector('.loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadAnimation.classList.add('off');
        }, 300)
    });
})();

// Navigation
(() => {
    const navParent = document.querySelector('.nav');
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__item')

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    document.addEventListener('scroll', () => {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            navParent.classList.add('small');
        } else {
            navParent.classList.remove('small');
        }
    })
})();

// Product Slider
(() => {
    const slides = document.querySelectorAll(".product__overview__slider__slide");

// loop through slides and set each slides translateX
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    });

// select next slide button
    const nextSlide = document.querySelector(".product__overview__slider__btn.next");

// current slide counter
    let curSlide = 0;
// maximum number of slides
    let maxSlide = slides.length - 1;

// add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        //   move slide by -100%
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        });
    });

// select next slide button
    const prevSlide = document.querySelector(".product__overview__slider__btn.prev");

// add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        });
    });
})();

// Modal Handling
(() => {
    const openModalBtn = document.querySelector('#open-modal');
    const closeModalBtn = document.querySelectorAll('.close-modal');
    const modalSelector = document.querySelector('.modal');
    const modal = document.querySelector('.modal__wrap');

    openModalBtn.addEventListener('click', e => {
        e.preventDefault();
        modalSelector.classList.add('active');
    });

    closeModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalSelector.classList.remove('active');
        });
    })

    modalSelector.addEventListener('click', () => {
        modalSelector.classList.remove('active');
    });

    modal.addEventListener('click', e => {
        e.stopPropagation();
    })
})();

// Product Tabs
(() => {
    const tab1 = document.querySelector("#description");
    const tab2 = document.querySelector("#specifications");
    const tab3 = document.querySelector("#reviews");

    const openTab = (evt, tabName) => {
        const tabContent = document.querySelectorAll(".product__info__grid");
        const tabLinks = document.querySelectorAll('[name="tabs"]');

        tabContent.forEach(element => {
            element.style.display = "none";
        });

        tabLinks.forEach(link => {
            link.className = link.className.replace("active", "");
        });

        document.getElementById(tabName).style.display = "flex";

        evt.currentTarget.className += "active";
    }

    tab1.addEventListener('click', e => openTab(e, 'description-content'));
    tab2.addEventListener('click', e => openTab(e, 'specifications-content'));
    tab3.addEventListener('click', e => openTab(e, 'reviews-content'));
})();