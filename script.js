
//  SLIDER------------------------------------------------------------

const sliderButtons = document.querySelectorAll('.slider_buttons button')
const slider = document.querySelectorAll('.slider')


//скрывает секцию слайдера и убирает эктив с кнопки

function hideSlider(){
    slider.forEach(item => item.classList.add('hide'))
    sliderButtons.forEach(btn => btn.classList.remove('active_button'))
}

//показывает переданный номер слайда и делает кнопку активной

function showSlider(index){
    slider[index].classList.remove('hide')
    sliderButtons[index].classList.add('active_button')
}

hideSlider()
showSlider(0)


sliderButtons.forEach((btn,index) => btn.addEventListener('click', ()=> {
hideSlider()
showSlider(index)
}))

//    ANCHORS ----------------------------------------------------

// const anchors = document.querySelectorAll('.header_nav a')

// anchors.forEach(a => { 

//     a.addEventListener('click', function(e) {

//         e.preventDefault()    //отменяем стандартное поведение ссылки

//         const idFromA = a.getAttribute('href')    // кладем сюда путь из ссылки, у нас там #названия id тегов
//         console.log(idFromA)                      // куда нам нужно переместиться
//         const waysFinish = document.querySelector(idFromA) //а здесь у нас сами теги с этими id
    
//         window.scroll({
//             top: waysFinish.offsetTop,
//             behavior:"smooth"
//         })
    
    
//     })
// })

