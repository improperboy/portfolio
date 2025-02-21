document.querySelector('.messageForm').addEventListener('submit', function(event) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let subject = document.querySelector('input[name="subject"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields');
        event.preventDefault();
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
});
