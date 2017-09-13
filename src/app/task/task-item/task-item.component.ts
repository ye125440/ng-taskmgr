import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { itemAnim } from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item; // 从 TaskHomeComponent 模版中传来 [item]="task"
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'out';

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseIn() {
    this.widerPriority = 'in';
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.widerPriority = 'out';
  }

}
