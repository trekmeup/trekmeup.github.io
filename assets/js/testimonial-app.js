const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0
let autoMove = true;

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
        autoMove = false;
    })
})

var intervalId = window.setInterval(function(){
    if(autoMove == true){
        indicators[currentTestimonial].classList.remove('active');
        if(currentTestimonial < 1)
        {
            currentTestimonial++;
        }
        else
        {
            currentTestimonial = 0;
        }
        indicators[currentTestimonial].classList.add('active');
        wrapper.style.marginLeft = `-${100 * currentTestimonial}%`;
        }
  }, 5000);