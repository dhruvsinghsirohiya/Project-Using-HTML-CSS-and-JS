// Initialize the Variables
let songIndex = 0;
let audioElem = new Audio('songs/1.mp4');
let mainPlay = document.querySelector("#main-play");
let gif = document.querySelector("#eff");
let mainSongName = document.querySelector(".main-song-name");
let rangeBar = document.querySelector('#range-bar');
let songItems = Array.from(document.querySelectorAll('.song-items'));
let songItemPlay = Array.from(document.querySelectorAll('.song-item-play'));
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');



// let rangeBar = document.querySelector("#range-bar");
let songs = [
    {
        songName: "Ae Dil Hain Mushkil",
        coverPath: "images/1.jpg",
        filePath: "songs/1.mp4"
    },
    {
        songName: "Ik Mulaqaat",
        coverPath: "images/2.jpg",
        filePath: "songs/2.mp4"
    },
    {
        songName: "Kya Loge Tum",
        coverPath: "images/3.jpg",
        filePath: "songs/3.mp4"
    },
    {
        songName: "Lut Gaye",
        coverPath: "images/4.jpg",
        filePath: "songs/4.mp4"
    },
    {
        songName: "Main Sharabi",
        coverPath: "images/5.jpg",
        filePath: "songs/5.mp4"
    },
    {
        songName: "Mere Raskhe Qamar",
        coverPath: "images/6.jpg",
        filePath: "songs/6.mp4"
    },
    {
        songName: "Mummy Nu Pasand",
        coverPath: "images/7.jpg",
        filePath: "songs/7.mp4"
    },
    {
        songName: "Ram Siya Ram",
        coverPath: "images/8.jpg",
        filePath: "songs/8.mp4"
    },
    {
        songName: "Tum Na Sunoge",
        coverPath: "images/9.jpg",
        filePath: "songs/9.mp4"
    },
    {
        songName: "Udd Ja Kaale Kaawa",
        coverPath: "images/10.jpg",
        filePath: "songs/10.mp4"
    },
];

songItems.forEach(
    (element, i) => {
        //    console.log(element,i);
        element.querySelectorAll("img")[0].src = songs[i].coverPath;
        element.querySelectorAll(".song-name")[0].innerText = songs[i].songName;
    }
)

// Main Play and Pause Click
mainPlay.addEventListener(
    'click',
    () => {
        if (audioElem.paused || audioElem.currentTime <= 0) {
            audioElem.play()
            mainPlay.classList.remove("fa-circle-play");
            mainPlay.classList.add("fa-circle-pause");
            gif.style.opacity = 1;

        }
        else {
            audioElem.pause();
            mainPlay.classList.remove("fa-circle-pause");
            mainPlay.classList.add("fa-circle-play");
            gif.style.opacity = 0;
        }
    }
);
// Update Range in Input
audioElem.addEventListener(
    'timeupdate',
    () => {
        const progress = parseInt((audioElem.currentTime / audioElem.duration) * 100);
        rangeBar.value = progress;
    }
);

rangeBar.addEventListener(
    'change',
    () => {
        audioElem.currentTime = rangeBar.value * audioElem.duration / 100;
    }
);

const makeAllPlays = () => {
    songItemPlay.forEach(
        (element) => {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        }
    )
};

songItemPlay.forEach(
    (element) => {
        element.addEventListener(
            'click',
            (e) => {
                // console.log(e.target);
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioElem.src = `songs/${songIndex + 1}.mp4`;
                mainSongName.innerText = songs[songIndex].songName;
                audioElem.currentTime = 0;
                audioElem.play();
                gif.style.opacity = 1;
                mainPlay.classList.remove("fa-circle-play");
                mainPlay.classList.add("fa-circle-pause");
            }
        )
    }
);

next.addEventListener(
    'click',
    () => {
        if (songIndex >= 9) {
            songIndex = 0;
        }
        else {
            songIndex = songIndex + 1;
        }
        audioElem.src = `songs/${songIndex + 1}.mp4`;
        mainSongName.innerText = songs[songIndex].songName;
        audioElem.currentTime = 0;
        audioElem.play();
        mainPlay.classList.remove("fa-circle-play");
        mainPlay.classList.add("fa-circle-pause");
    }
)

previous.addEventListener(
    'click',
    () => {
        if (songIndex <= 0) {
            songIndex = 0;
        }
        else {
            songIndex = songIndex - 1;
        }
        mainSongName.innerText = songs[songIndex].songName;
        audioElem.src = `songs/${songIndex + 1}.mp4`;
        audioElem.currentTime = 0;
        audioElem.play();
        mainPlay.classList.remove("fa-circle-play");
        mainPlay.classList.add("fa-circle-pause");
    }
)