// scripts.js

function validateLoginForm() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const errorElement = document.getElementById('signupError');

    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    
    errorElement.textContent = '';
    return true;
}

function validateSignupForm() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const errorElement = document.getElementById('signupError');

    if (!validateEmail(email)) {
        errorElement.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match.';
        return false;
    }

    errorElement.textContent = '';
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function validateForm()
 {
  let submitError=document.getElementById('submit-error')
  if(!validateEmail() || !validateName() || !validatePassword() || !validateRepeat())
   {
    submitError.innerHTML='Please resolve the errors!'
    return false
   } 
   else
   {
    submitError.innerHTML=''
    return true
   }
}