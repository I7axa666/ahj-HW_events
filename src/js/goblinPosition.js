import getRandomNumber from './getRandomNumb';

export default class GoblinPosition {
  constructor(element) {
    this.element = element;
    this.lostGoblinsCoun = 0;
    this.hitCount = 0;
    // this.countGoblins = this.countGoblins.bind(this);
  }

  setPosition() {
    const number = getRandomNumber(1, 16);
    const ferstPosition = this.element.querySelector(`[data-cell="${number}"]`);
    ferstPosition.classList.add('whith_gobline');
  }

  cleanPosition() {
    const position = this.element.querySelector('.whith_gobline');
    if (position === null) {
      return false;
    }
    position.classList.remove('whith_gobline');
    return true;
  }

  changePosition() {
    const number = getRandomNumber(1, 16);
    const randomPosition = this.element.querySelector(`[data-cell="${number}"]`);
    if (!this.cleanPosition()) {
      randomPosition.classList.add('whith_gobline');
      return;
    }
    randomPosition.classList.add('whith_gobline');
    this.countGoblins(false);
  }

  countGoblins(hit) {
    const goblinsCountElement = document.querySelector('.lost');
    const hitCountElement = document.querySelector('.hit');
    if (hit === false) {
      this.lostGoblinsCoun += 1;
    } else {
      this.hitCount += 1;
    }

    goblinsCountElement.textContent = this.lostGoblinsCoun;
    hitCountElement.textContent = this.hitCount;
    if (this.lostGoblinsCoun === 6) {
      alert('Вы проиграли');
      this.lostGoblinsCoun = 0;
      this.hitCount = 0;
    }
  }
}
