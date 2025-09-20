// Registration Form Validation
const regForm = document.getElementById('registrationForm');
if(regForm){
    regForm.addEventListener('submit', function(e){
        e.preventDefault();
        const fullname = this.fullname.value.trim();
        const email = this.email.value.trim();
        const dob = this.dob.value;
        const course = this.course.value;
        const gender = document.querySelector('input[name="gender"]:checked');

        if(fullname && email && dob && course && gender){
            document.getElementById('message').textContent = "Registration successful!";
            document.getElementById('message').style.color = "green";
            this.reset();
        } else {
            document.getElementById('message').textContent = "Please fill all required fields.";
            document.getElementById('message').style.color = "red";
        }
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        if(name && email && message){
            document.getElementById('contactMessage').textContent = "Message sent successfully!";
            document.getElementById('contactMessage').style.color = "green";
            this.reset();
        } else {
            document.getElementById('contactMessage').textContent = "Please fill all required fields.";
            document.getElementById('contactMessage').style.color = "red";
        }
    });
}

