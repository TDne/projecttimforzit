const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
} 

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Điền đầy đủ họ và tên vào cái :))');
    }else if(usernameInput.value.trim()=='Đặng Ngọc Thư' || usernameInput.value.trim()=='đặng ngọc thư'){
        setSuccess(usernameInput);
    }else {
        setError(usernameInput, 'Điền chuẩn đi làm ơnnnn');
    }
    //TITLE
    if(titleInput.value.trim()==''){
        setError(titleInput, 'Phải điền cả cái này nữa :v');
    }else {
        setSuccess(titleInput);
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}





