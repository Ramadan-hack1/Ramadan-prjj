
  // JavaScript Logic
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');
  const toggleFormButton = document.getElementById('toggle-form');
  const toggleText = document.getElementById('toggle-text');
  const imageTitle = document.getElementById('image-title');
  const imageDescription = document.getElementById('image-description');
  const imageButton = document.getElementById('image-button');
  const toastElement = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  let isSignUp = true;

// دالة لتبديل النماذج
function toggleForms() {
    isSignUp = !isSignUp;
    signupForm.classList.toggle('hidden', !isSignUp);
    signinForm.classList.toggle('hidden', isSignUp);
    toggleText.textContent = isSignUp ? "هل لديك حساب بالفعل؟" : "ليس لديك حساب وتريد المشاركة؟";
    toggleFormButton.textContent = isSignUp ? "تسجيل الدخول" : "إنشاء حساب";
    imageTitle.textContent = isSignUp ? "هل أنت متطوع معنا؟" : "انضم إلى مبادرة إفطار الصائمين";
    imageDescription.textContent = isSignUp
      ? "عُد للحساب الخاص بك للمساعدة في توزيع وجبات الإفطار وكسب الأجر في شهر الخير."
      : "ساهم معنا في إفطار الصائمين وكن جزءاً من الخير في شهر رمضان المبارك.";
    imageButton.textContent = isSignUp ? "تسجيل الدخول" : "انضمام للحملة";
  }

  // Toggle Form for mobile view
  toggleFormButton.addEventListener('click', toggleForms);

  // Toggle Form for image section button (desktop view)
  imageButton.addEventListener('click', toggleForms);

  // Show Toast
  function showToast(message, isSuccess = true) {
    toastMessage.textContent = message;
    toastElement.classList.remove('hidden');
    toastElement.classList.add(isSuccess ? 'bg-green-500' : 'bg-red-500');
    setTimeout(() => {
      toastElement.classList.add('hidden');
    }, 2000);
  }

  // Sign Up Logic
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value.trim();
    const firstname = signupForm.firstname.value.trim();
    const lastname = signupForm.lastname.value.trim();
    const phoneNumber = signupForm.phoneNumber.value.trim();

    // Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const phoneNumberPattern = /^07\d{8}$/;

    let isValid = true;

    if (!emailPattern.test(email)) {
      document.getElementById('email-error').textContent = "Please enter a valid email.";
      document.getElementById('email-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('email-error').classList.add('hidden');
    }

    if (!passwordPattern.test(password)) {
      document.getElementById('password-error').textContent = "Please enter a strong password (must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter).";
      document.getElementById('password-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('password-error').classList.add('hidden');
    }

    if (!phoneNumberPattern.test(phoneNumber)) {
      document.getElementById('phoneNumber-error').textContent = "Please enter a valid phone number (must be 10 digits and start with 07).";
      document.getElementById('phoneNumber-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('phoneNumber-error').classList.add('hidden');
    }

    if (!firstname) {
      document.getElementById('firstname-error').textContent = "Please enter your first name.";
      document.getElementById('firstname-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('firstname-error').classList.add('hidden');
    }

    if (!lastname) {
      document.getElementById('lastname-error').textContent = "Please enter your last name.";
      document.getElementById('lastname-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('lastname-error').classList.add('hidden');
    }

    if (isValid) {
      localStorage.setItem('user', JSON.stringify({ email, password, firstname, lastname, phoneNumber }));
      showToast("Registration successful!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  });

  // Sign In Logic
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signinForm.email.value.trim();
    const password = signinForm.password.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!emailPattern.test(email)) {
      document.getElementById('signin-email-error').textContent = "Please enter a valid email.";
      document.getElementById('signin-email-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('signin-email-error').classList.add('hidden');
    }

    if (!password) {
      document.getElementById('signin-password-error').textContent = "Password is required.";
      document.getElementById('signin-password-error').classList.remove('hidden');
      isValid = false;
    } else {
      document.getElementById('signin-password-error').classList.add('hidden');
    }

    if (isValid) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        showToast("Login successful!");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        showToast("Invalid email or password.", false);
      }
    }
  });

  // Google Sign In/Up
  document.getElementById('google-signup').addEventListener('click', () => {
    showToast("Google sign-up is not implemented yet.", false);
  });

  document.getElementById('google-signin').addEventListener('click', () => {
    showToast("Google sign-in is not implemented yet.", false);
  });
