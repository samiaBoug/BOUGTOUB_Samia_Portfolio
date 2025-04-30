/* ============== typing animation ==============*/
document.addEventListener('DOMContentLoaded', (event) => {
            var typed = new Typed(".typing", {
                strings: ["Junior Developer", "Web Developer", ""],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        });
/* ============== Aside  ==============*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++){
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++){
            if (navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for (let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("back-section");
        }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for (let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+ target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function ()
{
    const sectionIndex = this.getAttribute("date-section-index");
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++)
    {
        allSection[i].classList.toggle("open"); 
    }
}
$(document).ready(function () {
  let currentLang = "en"; // Langue par défaut

  // Fonction pour charger les traductions
  function loadTranslations(lang) {
    $.getJSON(`lang/${lang}.json`, function (data) {
      $("[data-key]").each(function () {
        const key = $(this).data("key");
        if (data[key]) {
          // Vérifie si l'élément contient un enfant <span>
          if ($(this).find(".name").length > 0) {
            $(this).find(".name").text(data[key]);
          } else {
            $(this).text(data[key]);
          }
        }
      });
    });
  }

  // Changer la langue au clic sur un bouton
  $(".lang-switch").click(function () {
    const lang = $(this).data("lang");
    if (lang !== currentLang) {
      currentLang = lang;
      loadTranslations(lang);
    }
  });

  // Charger la langue par défaut
    loadTranslations(currentLang);

});
