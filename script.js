// Buttons

const submitBtn = document.querySelector('.submit');
const btnValue = document.querySelectorAll('.btn-value');
const rateAgain = document.querySelector('.rate-again');
const thanksContainer = document.querySelector('.thanks-container');
const ratingsContainer = document.querySelector('.ratings-container');
const rating = document.getElementById('rating')




    btnValue.forEach(btn => {
        btn.addEventListener('click', function(){
            rating.innerHTML = btn.innerHTML;
        })
    })




submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    ratingsContainer.classList.add('hidden')
    thanksContainer.classList.remove('hidden');
    
})
rateAgain.addEventListener('click', function(e){
    e.preventDefault();
    ratingsContainer.classList.remove('hidden')
    thanksContainer.classList.add('hidden');
   
    
})


