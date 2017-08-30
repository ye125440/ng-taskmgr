import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title = '';

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<NewProjectComponent>,
    // private oc: OverlayContainer
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data));
    // console.log(JSON.stringify(this.data.title));
    // console.log(JSON.stringify(this.data.project.desc));
    // console.log(JSON.stringify(this.data.project.name));
    // this.oc.themeClass = this.data.dark ? 'my-app-dark-theme' : null;
  }

  onClick() {
    this.dialogRef.close('I received your message.');
  }

}
