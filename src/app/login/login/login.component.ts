import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
        email: [
          'ye125440@qq.com',
          Validators.compose([
            Validators.required,
            Validators.email,
          ])
        ],
        password: ['', Validators.required]
      }
    );
    // this.form = new FormGroup({
    //   email: new FormControl(
    //     'guilunlv@163.con',
    //     Validators.compose(
    //       [Validators.required, Validators.email]
    //     )),
    //   password: new FormControl('', Validators.required)
    // });
  }

  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
    // this.form.controls['email'].setValidators(this.validate);
  }

  // 自定义验证器
  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    const pattern = /^ye+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'The email must start with ye'
    };
  }

}
