'use strict';

import ImageAnimator from "./components/ImageAnimator";

const animator = new ImageAnimator('#content');

window.setInterval(
  () => {
    animator.slide(1);
    animator.render();
  },
  20
);
