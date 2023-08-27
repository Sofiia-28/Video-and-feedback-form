import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setVolume(0);

function getTime(data){
        localStorage.setItem("videoplayer-current-time", data.seconds)
    }

player.on('timeupdate', throttle(getTime, 1000));

const currentTime = Number(localStorage.getItem("videoplayer-current-time")) || 0;
player.setCurrentTime(currentTime)

