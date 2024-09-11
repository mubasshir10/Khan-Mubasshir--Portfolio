const fabButton = document.querySelector('.fab-button');
const fabOptions = document.querySelector('.fab-options');

// Toggle the display of the contact options when the FAB is clicked
fabButton.addEventListener('click', () => {
  fabOptions.classList.toggle('visible');
});

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("form-response").innerText = "Sending...";

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    fetch("https://example.com/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form-response").innerText = "Your message has been sent!";
    })
    .catch(error => {
        document.getElementById("form-response").innerText = "An error occurred. Please try again.";
    });
});

const fabButton = document.querySelector('.fab-button');
const fabOptions = document.querySelector('.fab-options');

// Toggle the display of the contact options when the FAB is clicked
fabButton.addEventListener('click', () => {
  fabOptions.style.display = fabOptions.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    // Simulate real-time message sending, you'd replace this with actual API integration
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Example of simulating sending to a backend API
    fetch("https://example.com/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form-response").innerText = "Your message has been sent!";
    })
    .catch(error => {
        document.getElementById("form-response").innerText = "An error occurred. Please try again.";
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_vqt1rp7', 'template_ly3xtza', this)
      .then(function(response) {
        document.getElementById("form-response").innerText = "Your message has been sent!";
      }, function(error) {
        document.getElementById("form-response").innerText = "An error occurred. Please try again.";
      });
  });
  