function init() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
  const langList = document.getElementById("lang-list");
  langList.childNodes.forEach((x) => {
    x.onclick = selectLanguage;
  });

  selectLanguageByCode(i18next.language);
}

i18next
  .use(window.i18nextBrowserLanguageDetector)
  .use(window.i18nextHttpBackend)
  .init(
    {
      fallbackLng: "en",
      supportedLngs: ["en", "cs", "de", "pl"],
    },
    function (err, t) {
      localize = locI18next.init(i18next);
      localize(".container");
    }
  );

function selectLanguage(e) {
  const lang = e.currentTarget.innerHTML;
  const langState = document.getElementById("lang-state");
  langState.innerHTML = lang;
  const langCode = e.currentTarget.lang;
  window.localStorage.setItem("i18nextLng", langCode);
  i18next.changeLanguage(langCode).then((t) => {
    // re-render objects for translation
    document.querySelectorAll("[data-i18n]").forEach((x) => {
      const translationKey = x.attributes["data-i18n"].value;
      console.log(translationKey + " = " + t(translationKey));
      x.innerText = i18next.t(translationKey);
    });
  });
  toggleLangStatus();
}

function selectLanguageByCode(lngCode) {
  const langState = document.getElementById("lang-state");
  const selectedLang = document.getElementById("lang-" + lngCode);
  langState.innerHTML = selectedLang.innerHTML;
}

var langVisible = false;

function toggleLangStatus() {
  const list = document.getElementById("lang-list");
  list.querySelectorAll('li').forEach((x) => {
    x.style.display = "block";
  });
  const selectedLang = document.getElementById("lang-" + i18next.language);
  selectedLang.style.display = "none";
  if (langVisible) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
  langVisible = !langVisible;
}
