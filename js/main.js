const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerBottom = new IntersectionObserver((bottom) => {
    bottom.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('animationb');
        }else{
            element.target.classList.remove('animationb');
        }
    });
});

const hiddenElementsB = document.querySelectorAll('.hiddenb');
hiddenElementsB.forEach((ele) => observerBottom.observe(ele));

document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger');
    const burgerOverlay = document.querySelector('.burger-overlay');
    const burgerLinks = document.querySelectorAll('.burger-menu__list_link');

    function closeMenu() {
        burgerBtn.classList.remove('active');
        burgerMenu.classList.remove('active');
        burgerOverlay.style.display = 'none';
    }
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        burgerOverlay.style.display = burgerMenu.classList.contains('active') ? 'block' : 'none';
    });
    
    burgerLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    burgerOverlay.addEventListener('click', closeMenu);
    

const openSecondFormButtons = document.querySelectorAll('#openSecondForm');
const secondModal = document.getElementById('secondModal');
const closeSecondModal = document.getElementById('closeSecondModal');

// Додаємо обробник подій для кожної кнопки openSecondForm
openSecondFormButtons.forEach(button => {
    button.addEventListener('click', () => {
        secondModal.style.display = 'flex';
    });
});

// Закриття модального вікна по кнопці
closeSecondModal.addEventListener('click', () => {
    secondModal.style.display = 'none';
});

// Закриття модального вікна по кліку поза його межами
window.addEventListener('click', (e) => {
    if (e.target === secondModal) {
        secondModal.style.display = 'none';
    }
});


    const casesData = {
        1: {
            title: "Інформація про травму",
            details: [
                "Жінка. 65 років. Підвернула ногу на вулиці.",
                "Перелом кісток гомілки зі зміщенням. Проведено комбінований метод лікування: інтрамедулярний та накісний остеосинтези.",
            ],
            recoveryPeriod: "2",
            stitchesCount: "0",
            firstTop: "Період Відновлення",
            firstBottom: "Дні",
            secondTop: "Витяжки /Гіпси",
            secondBottom: "Шт",
            imageSrc: "img/rentgen.png"
        },
        2: {
            title: "Інформація про травму",
            details: [
                "Чоловік. 26 років. Невдале падіння під час гри у футбол.",
                "Отримав складний багатовідламковий перелом стегнової кістки та перелом променевої кістки.",
            ],
            recoveryPeriod: "2",
            stitchesCount: "1",
            firstTop: "Період Відновлення",
            firstBottom: "Тижні",
            secondTop: "Операція",
            secondBottom: "Шт",
            imageSrc: "img/rentgen2.png"
        },
        3: {
            title: "Інформація про травму",
            details: [
                "Пацієнт. Отримав перелом нижньої третири  плечової кістки, у результаті змагань з армреслінгу.",
                "Під час операції проведено співставлення відламків кістки та фіксовано пластиною.",
            ],

            recoveryPeriod: "2",
            stitchesCount: "6",
            firstTop: "Операцій",
            firstBottom: "Шт",
            secondTop: "Час Відновлення",
            secondBottom: "Міс",
            imageSrc: "img/rentgen3.png"
        }
    };

    // Логіка для вкладок
    const tabs = document.querySelectorAll('.tab');
    const titleElement = document.getElementById('case-title');
    const detailsElement = document.getElementById('case-details');
    const recoveryElement = document.getElementById('recovery-period');
    const stitchesElement = document.getElementById('stitches-count');
    const imageElement = document.getElementById('case-image');

    const titleFirst = document.querySelector('.number__title_first');
    const elementFirst = document.querySelector('.element-first');
    const titleSecond = document.querySelector('.number__title_second');
    const elementSecond = document.querySelector('.element-second');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Оновлення активного таба
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Оновлення контенту
            const data = casesData[targetTab];
            titleElement.textContent = data.title;

            // Очищення і додавання нового списку
            detailsElement.innerHTML = "";
            data.details.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('content-info__list_item');
                li.innerHTML = `<span>•</span> ${item}`;
                detailsElement.appendChild(li);
            });

            recoveryElement.textContent = data.recoveryPeriod;
            stitchesElement.textContent = data.stitchesCount;
            imageElement.src = data.imageSrc;

            titleFirst.textContent = data.firstTop;
            elementFirst.textContent = data.firstBottom;
            titleSecond.textContent = data.secondTop;
            elementSecond.textContent = data.secondBottom;
        });
    });

    // Логіка модального вікна
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const zoomIcon = document.querySelector('.zoom-icon');
    const closeModal = document.querySelector('.modal .close');

    // Відкрити модальне вікно
    zoomIcon.addEventListener('click', () => {
        modalImg.src = imageElement.src;
        modal.style.display = 'flex';
    });

    // Закрити модальне вікно
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриття модального вікна при кліку за межами зображення
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

const scenes = document.querySelectorAll('.parallax-container');
scenes.forEach(scene => {
    new Parallax(scene);
});


//slider

const buttonprev = document.querySelector('.swiper-buttonprev');
const buttonnext = document.querySelector('.swiper-buttonnext');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
buttonnext.onclick = function() {
    swiper.slideNext();
};
buttonprev.onclick = function() {
    swiper.slidePrev();
};

const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      // Перемикаємо клас 'active' для питання
      question.classList.toggle("active");

      // Показуємо або ховаємо додатковий текст
      const extraText = question.querySelector(".question__text_extra");
      if (question.classList.contains("active")) {
        extraText.style.display = "block";
      } else {
        extraText.style.display = "none";
      }
    });
  });
});

const certificateElements = document.querySelectorAll('.certificates__item');
const previewImg = document.querySelector('.certificates__preview-image');
const popupModal = document.querySelector('.modal');
const popupImage = document.querySelector('.modalImage');
const closeButton = document.querySelector('.modalClose');

const isMobileScreen = () => window.innerWidth <= 991;

certificateElements.forEach(element => {
    element.addEventListener('click', () => {
        const imageSource = element.getAttribute('data-image');
        if (isMobileScreen()) {
            popupImage.src = imageSource;
            popupModal.classList.add('active');
        } else {
            previewImg.src = imageSource;

            certificateElements.forEach(el => el.classList.remove('active'));
            element.classList.add('active');
        }
    });
});
closeButton.addEventListener('click', () => {
    popupModal.classList.remove('active');
});

popupModal.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.classList.remove('active');
    }
});
