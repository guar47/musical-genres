const stopAll = () => {
  Array.from(document.getElementsByTagName('audio'))
    .filter(el => !el.paused)
    .map(el => el.pause());
  Array.from(document.getElementsByClassName('playing'))
    .map(el => el.classList.remove('playing'));
};

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    e.preventDefault();
    stopAll();
    return;
  }
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  const key = document.querySelector(`.genre-box[data-key="${e.keyCode}"]`);

  stopAll();
  audio.play();
  key.classList.add('playing');
});
