document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-message").innerText = "Please enter both username and password.";
        return;
    }
    
    
    if (username === "uig25458" && password === "1234") {
        window.location.href = "home2.html";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
});
        const profilePictureInput = document.getElementById('profile-picture');
        const profilePreview = document.getElementById('profile-preview');

        profilePictureInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function() {
                    profilePreview.src = reader.result;
                }
                reader.readAsDataURL(file);
            }
        });
        window.addEventListener('scroll', function() {
            var navbar = document.getElementById('navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        