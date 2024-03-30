const form = document.querySelector('.feedback-form');


form.addEventListener('input', () => {
    

    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const information = {
        email,
        message,
    }

  
    saveToLs('feedback-form-state', information)
    

});


form.addEventListener('submit', e => {

    e.preventDefault();

    if (form.elements.email.value.trim() === '' || form.elements.message.value.trim() === '') {
        alert('Напишіть, будь ласка, свої дані');
        return
    } 

    const data = getLs('feedback-form-state');
    console.log(data);
    localStorage.removeItem('feedback-form-state');
    form.elements.email.value = '';
    form.elements.message.value = '';
    
    
  
})



function showInfo() {


    const { email, message } = getLs('feedback-form-state') || {};
    
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
    
}

showInfo();






function saveToLs(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);    
}


function getLs(key) {

    const information = localStorage.getItem(key);
    try {
        const result = JSON.parse(information);
        return result
        
    } catch {
        return information
    }
    
}


