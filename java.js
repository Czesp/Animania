const slideContainer = document.querySelector('.container')
const slideLeft = document.querySelector('.left-container')
const slideRight= document.querySelector('.right-container')
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight

    if(direction === 'up') {
        activeSlideIndex++ 
        if(activeSlideIndex > slidesLength - 1) { 
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) { 
            activeSlideIndex = slidesLength - 1
        }
    } 
    

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}