'use strict';

export class Accordion {
  constructor(domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);

    this.toggle(this.buttonEl.getAttribute('aria-expanded') === 'true');

    // add event listeners
    this.buttonEl.addEventListener('click', this.onButtonClick);
  }

  onButtonClick = () => {
    this.toggle(!this.open);
  };

  toggle(open) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', `${open}`);
    if (open) {
      this.contentEl.removeAttribute('hidden');
      this.contentEl.classList.add('accordion-content--open');
    } else {
      this.contentEl.setAttribute('hidden', '');
      this.contentEl.classList.remove('accordion-content--open');
    }
  }

  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}
