const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];

const compliments = [
    "You have a great sense of humor.", "Your smile lights up the room.",
    "You bring out the best in people.", "You're incredibly thoughtful.",
    "You have a heart of gold.", "Your creativity is inspiring.",
    "You're a fantastic problem-solver.", "Your kindness is contagious.",
    "You connect with others easily.", "You are very knowledgeable.",
    "Your determination is admirable.", "You're a great listener.",
    "You make the world better.", "Your positivity is infectious.",
    "You have an eye for detail.", "You're very helpful.",
    "You are a natural leader.", "Your courage inspires many.",
    "You're an amazing friend.", "Your perspective is refreshing.",
    "You brighten everyone’s day.", "You're resourceful.",
    "You speak beautifully.", "You're a ray of sunshine.",
    "Your hard work pays off.", "You're trustworthy.",
    "You have great style.", "Your confidence inspires.",
    "You're a great mentor.", "Your dedication is remarkable.",
    "You make people feel valued."
];

const victimCardCompliments = [
    "You do good for others, but they don't appreciate it.",
    "You give so much but get nothing back.",
    "Your kindness goes unnoticed.",
    "You put others first always.",
    "You sacrifice a lot without recognition.",
    "You have a golden heart others take for granted.",
    "You're there for people but they aren't for you.",
    "You work hard but aren’t recognized.",
    "You care deeply even when others don’t.",
    "You forgive too easily.",
    "You give chances people don't return.",
    "You stand by people but they forget.",
    "You try to make peace but get blamed.",
    "You handle pressure alone.",
    "You give love but get little back.",
    "You're honest but misunderstood.",
    "You help everyone even when they don’t care.",
    "You share everything but people still want more.",
    "You're a true friend always.",
    "You help without expecting thanks."
];

const recommendations = [
    "Feed a street dog today.", "Plant a tree this week.",
    "Help someone in need.", "Meditate for 10 minutes.",
    "Write 3 things you're grateful for.", "Spend time with family.",
    "Read something inspiring.", "Exercise for 20 minutes.",
    "Donate old clothes.", "Cook a meal for someone.",
    "Smile at strangers.", "Learn a new skill.",
    "Use less plastic.", "Take a social break.",
    "Start journaling.", "Enjoy nature.",
    "Compliment someone today.", "Clean your workspace.",
    "Drink more water.", "Write to your future self.",
    "Support small businesses.", "Listen without interrupting.",
    "Practice kindness.", "Save money weekly.",
    "Make a vision board.", "Adopt eco habits.",
    "Reconnect with a friend.", "Spend time with kids.",
    "Call someone you miss.", "Say no to negativity."
];

const predictions = [
    "You will become a crorepati!", "Success is near.",
    "Dream job coming soon.", "Expect surprises.",
    "You will travel the world.", "A big opportunity awaits.",
    "Hard work will pay off.", "You will inspire someone.",
    "Adventure is coming.", "Great news ahead.",
    "Success through creativity.", "Life-changing moment soon.",
    "Financial breakthrough.", "Happiness is coming.",
    "Patience will reward you.", "New friend will help.",
    "Career breakthrough ahead.", "Opportunities coming.",
    "Bright future ahead.", "You will inspire many."
];

document.getElementById("astroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const resultText = `
        <strong>Hi ${name} ${surname}!</strong><br><br>
        🌟 <strong>Zodiac:</strong> ${zodiacSigns[month - 1]} <br><br>
        😊 ${compliments[day - 1]} <br>
        💔 ${victimCardCompliments[year % 20]} <br>
        ✅ ${recommendations[(day * month) % 30]} <br>
        🔮 ${predictions[(name.length * surname.length) % 20]}
    `;

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = resultText;
});
