import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time'

player.setVolume(0);

function getTime(data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
}

player.on('timeupdate', throttle(getTime, 1000));

const currentTime =
  Number(localStorage.getItem(CURRENT_TIME_KEY));
player.setCurrentTime(currentTime);
