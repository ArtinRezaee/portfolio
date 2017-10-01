import { Component, OnInit, Inject } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../css/magnific-popup.css','../css/style.css','../css/font-awesome.min.css']
})
export class DialogComponent implements OnInit {
  show:boolean = true;
  constructor(private dialogRef: MdDialogRef<DialogComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() { 
    if(this.data.git === 'NONE')
      this.show = false;
  }

  closeComponent(){
    this.dialogRef.close();
  }

}
