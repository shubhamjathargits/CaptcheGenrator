let char = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = "";
let captchaGenerated = false;

function generateCaptcha() {
    if (!captchaGenerated) { // Check if captcha hasn't been generated yet
        var length = 6;
        for (let i = 0; i < length; i++) {
            var pwd = Math.floor(Math.random() * char.length);
            captcha += char.substring(pwd, pwd + 1);
        }
        document.getElementById('cap').value = captcha;
        captchaGenerated = true;
    }
}

function submitCaptcha() {
    var userInput = document.getElementById('inp').value;
    if (userInput === captcha) {
        alert("Captcha matched!");
    } else {
        alert("Captcha mismatched. Please try again.");
    }
}

function refreshCaptcha() {
    captcha = "";
    captchaGenerated = false;
    document.getElementById('inp').value = "";
    generateCaptcha();
}

// Generate the captcha on page load
window.onload = generateCaptcha;
