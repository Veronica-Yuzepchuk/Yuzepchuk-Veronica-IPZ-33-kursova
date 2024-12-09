document.addEventListener('DOMContentLoaded', () => {
    const accordionBoxes = document.querySelectorAll('.accordion-box');

    accordionBoxes.forEach((box) => {
        const button = box.querySelector('.accordion-btn');
        const content = box.querySelector('.accordion-content');

        button.addEventListener('click', () => {
            accordionBoxes.forEach((otherBox) => {
                const otherButton = otherBox.querySelector('.accordion-btn');
                const otherContent = otherBox.querySelector('.accordion-content');

                if (otherBox !== box) {
                    otherBox.classList.remove('accordion-box_active');
                    otherButton.classList.remove('accordion-btn_active');
                    otherContent.style.maxHeight = null;
                }
            });

            const isActive = box.classList.contains('accordion-box_active');
            if (isActive) {
                box.classList.remove('accordion-box_active');
                button.classList.remove('accordion-btn_active');
                content.style.maxHeight = null;
            } else {
                box.classList.add('accordion-box_active');
                button.classList.add('accordion-btn_active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const menu = document.querySelector(".header__menu");
  const overlay = document.createElement("div");
  const menuRight = document.querySelector(".header__menu-right");

  overlay.classList.add("header__overlay");
  document.body.appendChild(overlay);

  function closeMenu() {
      header.classList.remove("active");
      burger.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
      menuRight.prepend(iconsBox);
      iconsBox.classList.remove("active");
  }

  burger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isActive = header.classList.toggle("active");
      burger.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("no-scroll");

      if (isActive) {
          menu.appendChild(iconsBox);
          iconsBox.classList.add("active");
      } else {
          closeMenu();
      }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
          closeMenu();
      }
  });

  menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" || e.target.closest(".menu-item")) {
          closeMenu();
      }
  });
});
const translations = {
    "headerMain": { 
        "ENG": "main", 
        "DEU": "haupt" 
    },
    "headerAbout": { 
        "ENG": "about", 
        "DEU": "über"
    },
    "headerGameFeatures": { 
        "ENG": "game features", 
        "DEU": "spielfunktionen" 
    },
    "headerSystemRequirements": { 
        "ENG": "system requirements", 
        "DEU": "systemanforderungen" 
    },
    "headerQuotes": { 
        "ENG": "quotes", 
        "DEU": "zitate" 
    },

    "firstBtnDown": { 
        "ENG": "The story", 
        "DEU": "die geschichte" 
    },
    "firstTitle": { 
        "ENG": "SURVIVE AT ALL COSTS", 
        "DEU": "ÜBERLEBE UM JEDEN PREIS" 
    },
    "firstSubtitle": { 
        "ENG": "Experience new social battle royale game", 
        "DEU": "Erleben Sie ein neues soziales Battle Royale-Spiel" 
    },
    "firstLink": { 
        "ENG": "Buy Now on Steam | $14.99", 
        "DEU": "Jetzt bei Steam kaufen | $14,99" 
    },

    "secondBeforeTitle": { 
        "ENG": "What is SOS?", 
        "DEU": "Was ist SOS?" 
    },
    "secondTitle": { 
        "ENG": "social battle royale game", 
        "DEU": "soziales Battle Royale-Spiel" 
    },
    "secondText": {
        "ENG": "Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape? Making the right decisions could be the difference between life and death.",
        "DEU": "In jeder Runde konkurrieren Sie und 15 andere Teilnehmer darum, von einer tödlichen Insel voller Monster zu entkommen. Der Trick ist: Drei Leute können überleben. Werden Sie allein fliehen oder Freundschaften schließen, um zu entkommen? Die richtigen Entscheidungen können den Unterschied zwischen Leben und Tod ausmachen."
    },

    "thirdBeforeTitle": { 
        "ENG": "what’s so special?", 
        "DEU": "was ist so besonders?" 
    },
    "thirdTitle": { 
        "ENG": "features", 
        "DEU": "merkmale" 
    },
    "accordionFirstBtn": { 
        "ENG": "SURVIVE AT ALL COSTS", 
        "DEU": "ÜBERLEBE UM JEDEN PREIS" 
    },
    "accordionFirstContent": {
        "ENG": "you have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
        "DEU": "Sie haben 30 Minuten, um ein Relikt zu finden, ein Signal zur Rettung zu senden und einen der drei Plätze im Rettungshubschrauber zu ergattern."
    },
    "accordionSecondBtn": { 
        "ENG": "CREATE ALLIES AND ENEMIES", 
        "DEU": "VERBÜNDETE UND FEINDE SCHAFFEN" 
    },
    "accordionSecondContent": {
        "ENG": "you have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
        "DEU": "Sie haben 30 Minuten, um ein Relikt zu finden, ein Signal zur Rettung zu senden und einen der drei Plätze im Rettungshubschrauber zu ergattern."
    },
    "accordionThirdBtn": { 
        "ENG": "IMPRESS THE AUDIENCE", 
        "DEU": "BEEINDRUCKEN SIE DAS PUBLIKUM" 
    },
    "accordionThirdContent": {
        "ENG": "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
        "DEU": "Sie haben 30 Minuten, um ein Relikt zu finden, ein Signal zur Rettung zu senden und einen der drei Plätze im Rettungshubschrauber zu ergattern."
    },

    "systemOsTitle": { 
        "ENG": "OS:", 
        "DEU": "Betriebssystem:" 
    },
    "systemOsText": {
        "ENG": "Windows 7 64-bit only No OSX support at this time",
        "DEU": "Nur Windows 7 64-Bit, derzeit kein OSX-Support"
    },
    "systemProcessorTitle": { 
        "ENG": "processor:", 
        "DEU": "prozessor:" 
    },
    "systemProcessorText": {
        "ENG": "Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ",
        "DEU": "Intel Core 2 Duo @ 2,4 GHz oder AMD Athlon X2 @ 2,8 GHz"
    },
    "systemMemoryTitle": { 
        "ENG": "memory:", 
        "DEU": "speicher:" 
    },
    "systemMemoryText": { 
        "ENG": "8 GB RAM", 
        "DEU": "8 GB RAM" 
    },
    "systemStorageTitle": { 
        "ENG": "storage:", 
        "DEU": "speicherplatz:" 
    },
    "systemStorageText": { 
        "ENG": "8 GB available space", 
        "DEU": "8 GB verfügbarer Speicherplatz" 
    },
    "systemGraphicTitle": { 
        "ENG": "GRAPHICS:", 
        "DEU": "grafikkarte:" 
    },
    "systemGraphicText": {
        "ENG": "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 Shader Model 5",
        "DEU": "NVIDIA GeForce GTX 660 2GB oder AMD Radeon HD 7850 2GB DirectX11 Shader Model 5"
    },
    "quotesBeforeTitle": { 
        "ENG": "What people think?", 
        "DEU": "Was denken die Leute?" 
    },
    "quotesTitle": { 
        "ENG": "Press quotes", 
        "DEU": "Pressestimmen" 
    },
    "quotesText": {
        "ENG": "Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users have to say.",
        "DEU": "Unser Ziel ist es, ein Produkt und einen Service zu schaffen, mit dem Sie zufrieden sind und den Sie täglich nutzen. Deshalb arbeiten wir ständig daran, unsere Dienstleistungen zu verbessern und hören wirklich auf das, was unsere Nutzer zu sagen haben."
    },
    "quotesLink": { 
        "ENG": "Read more testimonials", 
        "DEU": "Weitere Erfahrungsberichte lesen" 
    },
    "quotesFirstName": { 
        "ENG": "Evan Lahti", 
        "DEU": "Evan Lahti" 
    },
    "quotesFirstCareer": { 
        "ENG": "PC Gamer", 
        "DEU": "PC Gamer" 
    },
    "quotesFirstQuote": { 
        "ENG": "One of my gaming highlights of the year.", 
        "DEU": "Eines meiner Gaming-Highlights des Jahres." 
    },
    "quotesFirstDate": { 
        "ENG": "October 18 2018", 
        "DEU": "18. Oktober 2018" 
    },
    "quotesSecondName": { 
        "ENG": "Jada Griffin", 
        "DEU": "Jada Griffin" 
    },
    "quotesSecondCareer": { 
        "ENG": "Nerdreactor", 
        "DEU": "Nerdreactor" 
    },
    "quotesSecondQuote": { 
        "ENG": "The next big thing in the world of streaming and survival games.", 
        "DEU": "Das nächste große Ding in der Welt des Streamings und der Survival-Spiele." 
    },
    "quotesSecondDate": { 
        "ENG": "December 21 2018", 
        "DEU": "21. Dezember 2018" 
    },
    "quotesThirdName": { 
        "ENG": "Aaron Williams", 
        "DEU": "Aaron Williams" 
    },
    "quotesThirdCareer": { 
        "ENG": "Uproxx", 
        "DEU": "Uproxx" 
    },
    "quotesThirdQuote": { 
        "ENG": "Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.", 
        "DEU": "Snoop Dogg spielt das unglaublich unterhaltsame 'SOS' ist lächerlich."
    },
    "quotesThirdDate": { 
        "ENG": "December 24 2018", 
        "DEU": "24. Dezember 2018" 
    },

    "subscribeBeforeTitle": { 
        "ENG": "Want to stay in touch?", 
        "DEU": "Möchten Sie in Kontakt bleiben?" 
    },
    "subscribeTitle": { 
        "ENG": "newsletter SUBSCRIBE", 
        "DEU": "Newsletter ABONNIEREN" 
    },
    "subscribeText": {
        "ENG": "In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.",
        "DEU": "Um unsere Neuigkeiten zu erhalten, müssen Sie nur Ihre E-Mail-Adresse eingeben. Alles andere übernehmen wir. Wir senden Ihnen E-Mails mit Informationen über das Spiel. Wir spammen nicht."
    },
    "subscribeInputTitle": { 
        "ENG": "Your email address", 
        "DEU": "Ihre E-Mail-Adresse" 
    },
    "subscribeLink": { 
        "ENG": "Subscribe now", 
        "DEU": "Jetzt abonnieren" 
    },

    "footerMain": { 
        "ENG": "Main", 
        "DEU": "Hauptseite" 
    },
    "footerAbout": { 
        "ENG": "About", 
        "DEU": "Über uns" 
    },
    "footerGameFeatures": { 
        "ENG": "Game Features", 
        "DEU": "Spielmerkmale" 
    },
    "footerSystemRequirements": { 
        "ENG": "System Requirements",
        "DEU": "Systemanforderungen" 
    },
    "footerQuotes": { 
        "ENG": "Quotes", 
        "DEU": "Zitate" 
    }   
};

function applyTranslations(lang) {
const elements = document.querySelectorAll('[data-lang]');
elements.forEach((el) => {
    const key = el.getAttribute('data-lang');
    if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
    }
});
}

function changeURLLanguage() {
const hash = window.location.hash.slice(1);
const lang = hash || 'ENG';
applyTranslations(lang);
updateSelectedLanguage(lang);
updateLangList(lang);
}

function updateSelectedLanguage(lang) {
const langBtn = document.querySelector('.header__lang-btn');
if (langBtn) {
    langBtn.textContent = lang.toUpperCase();
}
}

function updateLangList(currentLang) {
const langList = document.querySelector('.header__list-lang');
langList.innerHTML = '';
const availableLangs = ['ENG', 'DEU'].filter((lang) => lang !== currentLang);

availableLangs.forEach((lang) => {
    const langItem = document.createElement('li');
    langItem.textContent = lang.toUpperCase();
    langItem.dataset.btn = lang;
    langList.appendChild(langItem);
});
}

document.addEventListener('DOMContentLoaded', () => {
const langSelect = document.querySelector('.header__lang-select');
const langList = langSelect.querySelector('.header__list-lang');

langList.addEventListener('click', (e) => {
    if (e.target.dataset.btn) {
        const selectedLang = e.target.dataset.btn;
        location.hash = selectedLang;
        applyTranslations(selectedLang);
        updateSelectedLanguage(selectedLang);
        updateLangList(selectedLang);
    }
});

document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.header__lang-select')) {
        e.preventDefault();
    }
});

changeURLLanguage();

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (['ENG', 'DEU'].includes(hash)) {
        changeURLLanguage();
    }
});
});
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-first', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: 'fade',
    });
  
    const theStoryBtn = document.querySelector('.first__arrow-down');
    const targetSection = document.querySelector('.second');
  
    if (theStoryBtn && targetSection) {
      theStoryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          event.preventDefault();
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  });
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 73,
        depth: 120,
        modifier: 4,
        slideShadow: false
    },
    loop: false,
    navigation: {
        nextEl: ".swiper__button-nextt",
        prevEl: ".swiper__button-prevv",
        disabledClass: 'swiper__button-disabled'
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        enabled: false
    },
    slidesPerView: 1,
    breakpoints: {
        560: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 3
        }
    },
    on: {
        slideChange: function() {
            var swiper = this;
            if (swiper.isBeginning) {
                swiper.navigation.prevEl.classList.add('swiper__button-disabled');
            } else {
                swiper.navigation.prevEl.classList.remove('swiper__button-disabled');
            }
            if (swiper.isEnd) {
                swiper.navigation.nextEl.classList.add('swiper__button-disabled');
            } else {
                swiper.navigation.nextEl.classList.remove('swiper__button-disabled');
            }
        }
    }
});