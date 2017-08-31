import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

export const sliceToRight = trigger('routerAnim', [
  state('void', style({'position': 'fixed', 'width': '100%', 'height': '100%'})),
  state('*', style({'position': 'fixed', 'width': '100%', 'height': '80%'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)'}),
    animate('500ms ease-in-out', style({transform: 'translateX(0)'}))
  ]),
  transition('* => void', [
    style({transform: 'translateX(0)'}),
    animate('500ms ease-in-out', style({transform: 'translateX(100%)'}))
  ]),
]);
