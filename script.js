// generates password
function Generate() {
    const length = document.getElementById("lengthSlider").value;
    const useDigits = document.getElementById("digits").checked;
    const useSymbols = document.getElementById("symbols").checked;
    const useMixed = document.getElementById("mixed").checked;

    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (useMixed) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useDigits) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_-+={}[]";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("Password").value = password;
}

// updates slider length
function updateLength(val) {
    document.getElementById("lengthOutput").value = val;
}

// copy password
let copyTimeout = null;

function CopyPass() {
    const passField = document.getElementById("Password");
    const btn = document.querySelector("#copy button");   

    if (btn.textContent.includes("COPIED")) return;

    navigator.clipboard.writeText(passField.value).then(() => {

        const originalText = btn.textContent;
        btn.textContent = "COPIED PASSWORD!";

        if (copyTimeout) clearTimeout(copyTimeout);

        copyTimeout = setTimeout(() => {
            btn.textContent = originalText;
        }, 700);
    });
}

window.onload = Generate;