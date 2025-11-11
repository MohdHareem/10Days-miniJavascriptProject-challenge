const quotes = [
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Everything you can imagine is real. — Pablo Picasso",
  "The best way to predict the future is to create it. — Peter Drucker",
  "If you want to shine like the sun, first burn like the sun. — A.P.J. Abdul Kalam",
  "Life is what happens when you’re busy making other plans. — John Lennon",
  "Dream big. Work hard. Stay humble.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "Hustle in silence and let your success make the noise.",
  "If you’re going through hell, keep going. — Winston Churchill",
  "The quieter you become, the more you can hear. — Ram Dass",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Doubt kills more dreams than failure ever will. — Suzy Kassem",
  "Be strong enough to stand alone, smart enough to know when you need help, and brave enough to ask for it.",
  "Fall seven times, stand up eight. — Japanese Proverb",
  "A day without laughter is a day wasted. — Charlie Chaplin",
  "Don’t wish it were easier. Wish you were better. — Jim Rohn",
  "In the middle of every difficulty lies opportunity. — Albert Einstein"
];

const btn = document.getElementById("btn")
const h1 = document.getElementById("h1")

btn.addEventListener('click', () => {
    const index = Math.floor(Math.random()*20)
    h1.textContent = quotes[index]
})

