const password = document.getElementById("password");
const bar = document.getElementById("strengthBar");
const text = document.getElementById("strengthText");
const sugg = document.getElementById("suggestions");

password.addEventListener("input", () => {
    const value = password.value;
    let strength = 0;

    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[@$!%*?&#]/.test(value)) strength++;
    if (value.length >= 10) strength++;

    let percent = (strength / 5) * 100;

    bar.style.width = percent + "%";

    if (strength <= 1) {
        bar.style.background = "red";
        text.textContent = "Strength: Weak";
    } 
    else if (strength == 2) {
        bar.style.background = "orange";
        text.textContent = "Strength: Moderate";
    } 
    else if (strength == 3) {
        bar.style.background = "gold";
        text.textContent = "Strength: Good";
    } 
    else {
        bar.style.background = "lime";
        text.textContent = "Strength: Strong 💪";
    }

    let tips = [];

    if (value.length < 8) tips.push("• Use at least 8 characters");
    if (!/[A-Z]/.test(value)) tips.push("• Add an uppercase letter");
    if (!/[0-9]/.test(value)) tips.push("• Include a number");
    if (!/[@$!%*?&#]/.test(value)) tips.push("• Add a special character");
    
    sugg.innerHTML = tips.join("<br>");
});