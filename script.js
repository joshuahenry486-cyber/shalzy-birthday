function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });

    document.getElementById(screenId).classList.add("active");

}


/* =========================
   OPENING
========================= */

function showBirthday() {

    showScreen("birthday");

}


/* =========================
   BIRTHDAY
========================= */

function showMessage() {

    showScreen("message");

}


/* =========================
   MESSAGE
========================= */

function showHer() {

    showScreen("her");

}


/* =========================
   HER PHOTO EXPERIENCE
========================= */

const herPhotos = [

    {
        image: "her1.jpg",
        title: "Look at my beautiful girl 🥹❤️",
        caption: "How did Boboo get this lucky?"
    },

    {
        image: "her2.jpg",
        title: "That smile though... 😍",
        caption: "You have no idea what that smile does to me."
    },

    {
        image: "her3.jpg",
        title: "My Shalzy ❤️",
        caption: "Beautiful isn't even enough to describe you."
    },

    {
        image: "fav1.jpg",
        title: "My favorite girl 🥰",
        caption: "If I had to choose again, I'd still choose you."
    }

];


let currentPhoto = 0;


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= herPhotos.length) {

        showScreen("memories");

        return;

    }


    const photo = herPhotos[currentPhoto];


    const imageElement =
        document.getElementById("herPhoto");

    const titleElement =
        document.getElementById("photoTitle");

    const captionElement =
        document.getElementById("photoCaption");


    imageElement.style.opacity = "0";


    setTimeout(function() {

        imageElement.src = photo.image;

        titleElement.textContent = photo.title;

        captionElement.textContent = photo.caption;

        imageElement.style.opacity = "1";

    }, 300);

}


/* =========================
   MEMORIES
========================= */

function startMemories() {

    alert("Our memories are waiting for us ❤️");

}
/* =========================
   MEMORY STORY
========================= */

const memories = [

    {
        image: "memory1.jpg",
        title: "A moment I'll never forget ❤️",
        caption: "Looking at this picture always takes me back."
    },

    {
        image: "memory2.jpg",
        title: "Look at us 🥹",
        caption: "One picture, so many memories."
    },

    {
        image: "memory3.jpg",
        title: "Another beautiful moment ❤️",
        caption: "I'm grateful for every moment we've shared."
    },

    {
        image: "memory4.jpg",
        title: "And then there's this... 🥰",
        caption: "I hope we create thousands more memories together."
    },

    {
        image: "us1.jpg",
        title: "Us ❤️",
        caption: "My favorite place is anywhere with you."
    },

    {
        image: "us2.jpg",
        title: "Just you and me 🥰",
        caption: "I'd choose these moments over and over again."
    },

    {
        image: "us3.jpg",
        title: "Our little story ❤️",
        caption: "And we're only getting started..."
    },

    {
        image: "us4.jpg",
        title: "Here's to many more 🥂",
        caption: "More adventures. More laughter. More us."
    }

];


let currentMemory = 0;


function openMemoryStory() {

    currentMemory = 0;

    showScreen("memoryStory");

    updateMemory();

}


function updateMemory() {

    const memory = memories[currentMemory];


    document.getElementById("memoryImage").src =
        memory.image;


    document.getElementById("memoryTitle").textContent =
        memory.title;


    document.getElementById("memoryCaption").textContent =
        memory.caption;


    document.getElementById("memoryNumber").textContent =
        "Memory " +
        String(currentMemory + 1).padStart(2, "0");

}


function nextMemory() {

    currentMemory++;


    if (currentMemory >= memories.length) {

        showScreen("videosIntro");

        return;

    }


    updateMemory();

}


/* =========================
   VIDEOS
========================= */

function openVideos() {

    currentVideo = 0;

    showScreen("videoStory");

    updateVideo();

}
function nextVideo() {

    const videoElement = document.getElementById("memoryVideo");

    videoElement.pause();

    currentVideo++;

    if (currentVideo >= videos.length) {

        showScreen("loveLetter");

        return;

    }

    updateVideo();

}
/* =========================
   VIDEO STORY
========================= */

const videos = [

    {
        video: "memory1.mp4",
        title: "A moment worth remembering ❤️",
        caption: "Some moments are better experienced than explained."
    },

    {
        video: "memory2.mp4",
        title: "Look at us 🥹❤️",
        caption: "I could watch this moment over and over again."
    },

    {
        video: "memory3.mp4",
        title: "One of my favorite moments ❤️",
        caption: "Every little moment with you means something to me."
    },

    {
        video: "memory4.mp4",
        title: "Just us 🥰",
        caption: "I hope this is only the beginning."
    },

    {
        video: "special1.mp4",
        title: "A special one for you 💖",
        caption: "Because you deserve your own little movie."
    },

    {
        video: "special2.mp4",
        title: "Another beautiful memory ❤️",
        caption: "More laughter. More memories. More us."
    },

    {
        video: "special3.mp4",
        title: "For my Shalzy 🥹",
        caption: "Happy birthday to the girl who means so much to me."
    },

    {
        video: "special4.mp4",
        title: "And there's more... 😍",
        caption: "We're not done making memories."
    },

    {
        video: "special5.mp4",
        title: "One last look back ❤️",
        caption: "Look how far we've come."
    },

    {
        video: "special6.mp4",
        title: "Before the final surprise... 🎁",
        caption: "There's just one more thing I want you to see."
    },

    {
        video: "special7.mp4",
        title: "This one is for you, Shalzy ❤️",
        caption: "Happy birthday, my love."
    }

];


let currentVideo = 0;


/* OPEN VIDEOS */

function openVideos() {

    currentVideo = 0;

    showScreen("videoStory");

    updateVideo();

}


/* UPDATE VIDEO */

function updateVideo() {

    const video = videos[currentVideo];

    const videoElement =
        document.getElementById("memoryVideo");

    const sourceElement =
        document.getElementById("videoSource");


    document.getElementById("videoNumber").textContent =
        "Moment " +
        String(currentVideo + 1).padStart(2, "0");


    document.getElementById("videoTitle").textContent =
        video.title;


    document.getElementById("videoCaption").textContent =
        video.caption;


    sourceElement.src = video.video;

    videoElement.load();

}


/* NEXT VIDEO */

function nextVideo() {

    const videoElement =
        document.getElementById("memoryVideo");

    videoElement.pause();

    currentVideo++;


    if (currentVideo >= videos.length) {

    showScreen("loveLetter");

    startLoveLetter();

    return;

}


    updateVideo();

}
/* =========================
   LOVE LETTER
========================= */

const loveMessage = `My beautiful Shalzy ❤️

Happy birthday to the girl who has a very special place in my heart.

I want you to know how grateful I am that you came into my life. Every conversation, every laugh, every little moment we've shared means more to me than you probably realize.

You are beautiful, amazing, and genuinely special to me.

I hope this new chapter of your life brings you happiness, peace, success, and everything your heart desires.

And no matter how many birthdays come and go, I hope we get to celebrate many more of them together.

Thank you for being my Shalzy.

Happy Birthday, my love. ❤️

From your Boboo 🥰`;

let typingIndex = 0;


function startLoveLetter() {

    typingIndex = 0;

    const messageElement =
        document.getElementById("typedMessage");

    const button =
        document.getElementById("letterButton");

    messageElement.textContent = "";

    button.style.display = "none";

    typeMessage();

}


function typeMessage() {

    const messageElement =
        document.getElementById("typedMessage");

    if (typingIndex < loveMessage.length) {

        messageElement.textContent +=
            loveMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeMessage, 35);

    } else {

        document.getElementById("letterButton").style.display =
            "inline-block";

    }

}
/* =========================
   FINAL SURPRISE
========================= */

function showFinalSurprise() {

    showScreen("finalSurprise");

    createHearts();

    setTimeout(function() {
        createHearts();
    }, 1200);

    setTimeout(function() {
        createHearts();
    }, 2400);

}


/* FLOATING HEARTS */

function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-110vh) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 4000 + Math.random() * 3000,
                easing: "ease-out"
            }
        );

        setTimeout(function() {

            heart.remove();

        }, 7000);

    }

}