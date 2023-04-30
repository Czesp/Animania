const nextEl = document.querySelector(".next")

const prevEl = document.querySelector(".prev")

const imgsEl = 5


const imageContainerEl = document.querySelector(".image-container")

let currentImg = 1

let timeout;

nextEl.addEventListener("click", () => {
    currentImg++
    clearTimeout(timeout)
    updateImg()
})

prevEl.addEventListener("click", () => {
    currentImg--
    clearTimeout(timeout)
    updateImg()
})

updateImg()

function updateImg(){

        if(currentImg > 5) {
            currentImg = 1;
        }else if (currentImg < 1) {
            currentImg = 5;
        }

        imageContainerEl.style.transform= `translateY(-${(currentImg - 1) *500}px)`;

        timeout = setTimeout(()=>{
            currentImg++
            updateImg()
        }, 3500)
}