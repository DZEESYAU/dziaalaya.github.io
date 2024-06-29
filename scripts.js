document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');

    document.getElementById('heart-button').addEventListener('click', function() {
        backgroundMusic.play();
        document.getElementById('heart-section').style.display = 'none';
        document.getElementById('message-section').style.display = 'block';
        showMessage(0);
    });

    const messages = [
        "Hey Alaya, you light up my life. ❤️✨😍",
        "Your kindness is inspiring. 💖🌸",
        "Your smile brightens my day. 😃🌼",
        "I'm proud to know you. 🙌🌟😊",
        "You have a heart of gold. 💛💫🌟",
        "Your presence is a gift. 🎁💕",
        "You make everything better. ❤️👍🌟",
        "You complete my world. 🌍💖💫",
        "I cherish every moment with you. 🥰🕰️💖",
        "Your laughter is a joy. 😂🎉",
        "My admiration for you is endless. 🌟👏❤️",
        "You are incredible, always. 🌟😊",
        "Believe in yourself, you are capable of amazing things. 💪✨🌟",
        "Keep pushing forward, you have the strength to achieve your dreams. 🚀💫💪",
        "Every day is a new opportunity to grow and improve. 🌱🌞🌼",
        "You are resilient and can overcome any challenge. 💪🔥🌟",
        "Your hard work and dedication are truly admirable. 👏💼🌟",
        "Stay positive, your attitude determines your direction. 😊➡️🌞",
        "You have the power to create your own happiness. 🌟💫",
        "Your potential is limitless, keep striving for excellence. 🌟🚀👏",
        "You are a beacon of light and hope for those around you. 🔆✨💖",
        "Your sound is like magic, it heals and comforts. 👐✨💖",
        "I am grateful to share my life with you. 🙏❤️🌟",
        "You make my world a better place. 🌍💖😊",
        "Semangat ya nanti kuliahnya. 😍😘",
        "Harus bisa jadi dokter yang bermanffat. 👩🏼‍⚕️💪🏻",
        "kalo udh jadi dokter jagan pernah mikirin pendapatan , kalo ada pasien yang gk mampu tolong gratisin biayanya. 👑⛑️",
        "karna tugas istri bukan buat cari uang, nanti kalo jadi dokter jadilah dokter yang berorientasikan untuk kesejahteraan masyarakat 🥶🧚🏻",
        "Inget semua hal yang sudah kamu capai sampe saat ini berkat orang tua, buat beliau ngerasa bangga ke kamu 😉",
        "Ingat terus, your obligation now is to prove to your parents that you can succeed, that you are a successful child. Make them proud because they have raised you well. 😍🦾🫂",
        "Al, keep maintaining your mindset. I like your mindset about your future. You are willing to leave your job to educate your child in the future, and that mindset you must maintain because a mother is the first educator for her child. Because of this reason, my mom likes you and is always happy to know a woman who has this kind of mindset. 👰🏻‍♀️👑💍",
        "And also, my mom likes your behavior. Thank you for always reminding me whenever I refer to my mom with 'dia,' you always correct me.🌺👑👑",
        "Sebenernya banyak alasan why you became my best option to get my love. Paling kalau kutulis di sini besok baru selesai deh. 😅😅",
        "Tapi setiap kelebihan ada kekurangan ya kan, but keep correcting yourself and always learn from mistakes. 🐭🌺🌺",
        "Oh ya, semisal nanti aku tiba-tiba ke New Zealand 🇳🇿, mungkin kita punya kesibukan masing-masing dan kita memiliki perbedaan waktu yang sangat jauh. But, always keep giving me your condition and always stay connected. Ya, mungkin New Zealand jauh juga, tapi semisal kalau takdirku ke Malaysia mungkin itu lebih baik.🤗🤗🌳🌿☘️",
        "Al, aku nggak mau kita saling nggk kenal satu sama lain. Make me sure that you are still my best option by letting me know about your condition and activities. I  think it's hard for me if I can't know about you, hehehe😍🫣😉😇😇.",
        "Embrace your uniqueness, it makes you special and extraordinary. 🌟💖💫",
        "With every beat of my heart, I love you more. 💓💞",
        "Your love is my guiding light. 🌟✨",
        "You are my heart's treasure. 💖🔑💛",
        "Your love inspires me every day. ❤️🌟✨",
        " ❤️ i lovee uu ❤️ ",
        "Maaf ya kalau websitenya kurang baguss  baru belajar bahasa program baru, hehe. disimpen link nya ya kalau lagi kangen aku. 😊💻💖",
        "Maaf ya kalo selama ini belum bisa bantu kamu bnyk, love uu. 🙏❤️💞"
    ];


    let currentMessageIndex = 0;

    document.getElementById('next-button').addEventListener('click', function() {
        currentMessageIndex++;
        if (currentMessageIndex < messages.length) {
            showMessage(currentMessageIndex);
        } else {
            document.getElementById('message-section').style.display = 'none';
            document.getElementById('final-section').style.display = 'block';
        }
    });

    function showMessage(index) {
        document.getElementById('message').textContent = messages[index];
    }

    document.getElementById('love-button').addEventListener('click', function() {
        window.open('love-message.html', '_blank');
    });
});
