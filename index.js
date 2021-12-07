const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const skipFirstBtn = document.getElementById("skip-first-btn")
const skipLastBtn = document.getElementById("skip-last-btn")
const songPlaying = document.getElementById('song-playing')

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.



const musicArray = ['audio/bells.mp3', 'audio/bingrudolph.mp3', 'audio/bluechristmas.mp3', 'audio/sinatramistletoeandholly.mp3', 'audio/warisoverI.mp3']

let song = 0
let audio = new Audio(musicArray[song])

function playNewSong() {
    audio.pause()
    audio = new Audio(musicArray[song])
    audio.play()
}

function whichSong() {
    switch(musicArray[song]) {
        case 'audio/bells.mp3' :
             return 'Jingle Bells'
             break
        case 'audio/bingrudolph.mp3' :
            return 'Bing Crosby — Rudolph The Red Nosed Reindeer'
            break
        case 'audio/bluechristmas.mp3' : 
            return 'Elvis Presley — Blue Christmas'
            break 
        case 'audio/sinatramistletoeandholly.mp3' :
            return 'Frank Sinatra –Mistletoe and Holly'
            break
        case 'audio/warisoverI.mp3' :
            return ' John Lennon — War Is Over (So This Is Christmas)'
            break  
        default :
               
    }
}

function returnSong() {
    songPlaying.textContent = `Listening to: ${whichSong()}`
}

playBtn.addEventListener('click', function() {
    audio.play()
    returnSong()
})

pauseBtn.addEventListener('click', function() {
    audio.pause()
})

stopBtn.addEventListener('click', function() {
    audio.pause()
    audio.currentTime = 0
})

skipFirstBtn.addEventListener('click', function() {
    if (song === 0) {
        song = musicArray.length -1
      } else {
        song--
    }
   playNewSong()
   returnSong()
})

skipLastBtn.addEventListener('click', function() {
    if (song === musicArray.length -1) {
        song = 0 
    } else {
        song++
    }
   playNewSong()
   returnSong()
  })


