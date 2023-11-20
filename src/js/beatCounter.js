export default class Beat {
  constructor(element) {
    this.element = element;
  }

  registerBeats(someGoblin) {
    this.element.addEventListener('click', (event) => {
      if (event.target.classList.contains('whith_gobline')) {
        someGoblin.countGoblins(true);
        someGoblin.cleanPosition();
      }
    });
  }
}
