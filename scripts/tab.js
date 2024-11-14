const tabButtonElements = document.querySelectorAll('.tab__button')
const tabImagesElements = document.querySelectorAll('.tab__image')


function hideTabs() {
    tabButtonElements.forEach((tabButton) => {
        tabButton.classList.remove('is-active')
    })
    tabImagesElements.forEach(image => image.classList.add("visually-hidden"))
}

function showTab(i) {
    tabButtonElements[i].classList.add('is-active')
    tabImagesElements[i].classList.remove('visually-hidden')
}

tabButtonElements.forEach((button, index) => button.addEventListener('click', () => {
    hideTabs()
    showTab(index)
}))
