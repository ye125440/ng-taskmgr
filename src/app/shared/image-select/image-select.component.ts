import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageSelectComponent),
      multi: true
    },
  ]
})
export class ImageSelectComponent implements ControlValueAccessor {
  @Input() title = '选择';
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() items: string[] = [];
  @Input() userSvgIcon = false;
  @Input() itemWidth = '80px';
  selected: string; // 当前 img 的 src
  private propagationChange = (_: any) => {};

  constructor() { }

  onChange(i) {
    this.selected = this.items[i];
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.propagationChange = fn;
  }

  registerOnTouched(fn: any): void {}

  validate(c: FormControl): { [ket: string]: any } {
    return this.selected ? null : {
      imageListInvalid: {
        valid: false
      }
    };
  }

  // setDisabledState?(isDisabled: boolean): void {}

}
