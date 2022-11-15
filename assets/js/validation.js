// form validation

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var subjectError=document.getElementById('subject-error')


function validateName() {
    
    var name= document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '';
        return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value;
    var required =30;
    var left = required - message.length;

    if(left>0) {
        messageError.innerHTML = left + ' more characters required.';
        return false;
    } else {
        messageError.innerHTML = 'Enter a valid message';
    }

    messageError.innerHTML = '';
    return true;
}

function validateSubject() {
    var message = document.getElementById('subject').value;
    var required =20;
    var left = required - message.length;

    if(left>0) {
        subjectError.innerHTML = left + ' more characters required.';
        return false;
    } else {
        subjectError.innerHTML = 'Enter a valid subject';
    }

    subjectError.innerHTML = '';
    return true;
}

function validateForm() {
    if(!validateEmail() || !validateMessage() || !validateName() || !validateSubject()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix all errors to submit.';
        setTimeout(function() {submitError.style.display = 'none';}, 3000);
        return false;
    }
}