const image = require('../styles/monkey.jpg');

export default class ImageAnimator {
  constructor(selector) {
    this.horizontalOffset = 0;
    this.direction = 1;

    this.innerEl = document.createElement('div');
    this.innerEl.className = "animaged-image-inner";

    this.imageEl = document.createElement('img');
    this.imageEl.src = image;
    this.imageEl.style.margin = '25px';
    this.innerEl.appendChild(this.imageEl);

    this.el = document.querySelector(selector)
    this.el.className = "animated-image";
    this.el.appendChild(this.innerEl);
  }

  slide(amount) {
    this.horizontalOffset = (this.horizontalOffset + (5 * this.direction));
    if(this.horizontalOffset <= 0) {
      this.direction = 1;
    } else if (this.horizontalOffset > 750) {
      this.direction = -1;
    }
  }

  render() {
    this.el.style.transform = `translateX(${this.horizontalOffset}px)`;
  }
}
