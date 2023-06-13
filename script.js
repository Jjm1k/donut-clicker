// Navigation Dropdown Functionality Start
const aboutDonuts = document.querySelector(".about-donuts")
const inspirationDonuts = document.querySelector(".inspiration-donuts")
const developerDonuts = document.querySelector(".developer-donuts")

const showAbout = () => {
    if (aboutDonuts.style.display === "block") {
    aboutDonuts.style.display = "none"
    inspirationDonuts.style.display = "none"
    developerDonuts.style.display = "none"
    } else {
        aboutDonuts.style.display = "block"
        inspirationDonuts.style.display = "none"
        developerDonuts.style.display = "none"
    }
}

const showInspiration = () => {
    if (inspirationDonuts.style.display === "block") {
    inspirationDonuts.style.display = "none"
    aboutDonuts.style.display = "none"
    developerDonuts.style.display = "none"
    } else {
        inspirationDonuts.style.display = "block"
        aboutDonuts.style.display = "none"
        developerDonuts.style.display = "none"
    }
}

const showDeveloper = () => {
    if (developerDonuts.style.display === "block") {
    developerDonuts.style.display = "none"
    aboutDonuts.style.display = "none"
    inspirationDonuts.style.display = "none"
    } else {
        developerDonuts.style.display = "block"
        aboutDonuts.style.display = "none"
        inspirationDonuts.style.display = "none"
    }
}

// Navigation Dropdown Functionality End

