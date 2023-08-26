import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = "videoplayer-current-time";
player.getCurrentTime().then(function(seconds){
    localStorage.setItem(CURRENT_TIME_KEY, seconds)
})

player.on('timeupdate', throttle(getCurrentTime, 1000));

// const currentTime = Number(localStorage.getItem(CURRENT_TIME_KEY)) || 0;
// player.setCurrentTime(currentTime)

// console.log(timeKey.second);
