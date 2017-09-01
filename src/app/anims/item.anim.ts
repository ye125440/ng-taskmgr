import { trigger, state, transition, style, animate } from '@angular/animations';

export const itemAnim = trigger('item', [
  state('in', style({'border-left-width': '6px', 'border-top-height': '6px'})),
  state('out', style({'border-left-width': '3px'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out')),
]);
