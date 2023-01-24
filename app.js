const questions = document.querySelectorAll('.question');


questions.forEach((item) => {
    item.addEventListener('click', function(e){
        item.childNodes[1].style.color="hsl(238, 29%, 16%)";
     let answers= item.nextElementSibling;
    
      if(answers.childNodes[1].classList.contains('visibility')){
            answers.childNodes[1].classList.toggle("visibility")
        }
        else{
            answers.childNodes[1].classList.add('visibility')
        }
        })     
    })





