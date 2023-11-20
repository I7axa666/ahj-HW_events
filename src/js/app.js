import GoblinPosition from './goblinPosition';
import Beat from './beatCounter';

document.addEventListener('DOMContentLoaded', () => {
  const goblinPosition = new GoblinPosition(document.querySelector('.table'));
  goblinPosition.setPosition();
  setInterval(() => {
    goblinPosition.changePosition();
  }, 1000);

  const beat = new Beat(document.querySelector('.table'));
  beat.registerBeats(goblinPosition);
});
