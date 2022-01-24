document.addEventListener('DOMContentLoaded', () => {
    //Starts counting immediately after DOM loads, updating the DOM count
    let  startCounter = setInterval(additionButton, 1000);
    
        
    //Event Listener for the Form, e.prevents()  
    document.body.querySelector('#comment-form').addEventListener('submit', (e)=> {    // Event Listener for the Form 
        e.preventDefault()
        submitForm(e.target['comment-input'].value);    //The comments submitted is passed into the "submitHandler". Creating the tags and appending to DOM
    })   
    
        const buttons = document.body.querySelectorAll('button');
        for(let button of buttons ) {
            if( button.id !== 'submit') {
                button.addEventListener('click', (e) => {
    
                    if(e.target.id === 'pause'&& e.target.outerText === "pause") { pauseButton(); }
                    else if(e.target.id === "pause" && e.target.outerText === "resume") { resumeButton(); } 
                    else if(e.target.id === "minus") { minusButton(); }   
                    else if(e.target.id === "plus") { additionButton(); }
                    else if(e.target.id === "heart") { heartButton(); }                                                          
                })
            } 
            
        };

        
  
    function  resumeButton() {
        startCounter = setInterval(additionButton, 1000);
        enableButtons()
        buttons[3].innerHTML = 'pause';
     }

    function  heartButton() {
        const heartComment = document.querySelector('.likes');
        const li = document.createElement('li');
        li.innerText = `${counter.innerText} has been liked 1 time`;
        heartComment.append(li);                        
     }

    function  additionButton() {
        counter.innerText = parseInt(counter.innerText)+ 1;               
     }

     function minusButton() {
        counter.innerText = parseInt(counter.innerText)- 1;                        
     }

    function pauseButton() {
        clearInterval(startCounter);         
        disableButton();
        buttons[3].innerHTML = 'resume';
    }

    function disableButton() {
        buttons[0].disabled = true;  
        buttons[1].disabled = true; 
        buttons[2].disabled = true;  
        buttons[4].disabled = true;
    }

    function enableButtons() {
        buttons[0].disabled = false;  
        buttons[1].disabled = false; 
        buttons[2].disabled = false;  
        buttons[4].disabled = false;
    }


    
 
});
// console.log('Before DOM Loads');





