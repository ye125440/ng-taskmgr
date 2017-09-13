import {
  ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit,
  Output
} from '@angular/core';
import { cardAnim } from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ],
  // 对于笨组件 所有的变化来自于输入 设置 cd 策略为 onPush
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onProjectEdit = new EventEmitter<void>();
  @Output() onProjectDelete = new EventEmitter<void>();
  // 把 cardState 绑定到　@card　上，设置初始值为　'out';
  // 这里的 card 是导入的 cardAnim 中 trigger's name
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  // 监听宿主
  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  onEditClick() {
    this.onProjectEdit.emit();
  }

  onDeleteClick() {
    this.onProjectDelete.emit();
  }

}
