import { PORTFOLIO } from './portfolio.Interface';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { emailValidator } from './email.validator';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/animate.min.css',
  './css/bootstrap.min.css', './css/font-awesome.min.css', './css/magnific-popup.css',
  './css/owl.carousel.css', './css/style.css', './css/skins/default.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  loaded: boolean = false;
  navToggle: boolean = false;
  responsive: boolean = false;
  form: FormGroup;
  
  constructor(@Inject(DOCUMENT) private document: Document,
  private fb: FormBuilder, private fDb: AngularFireDatabase, private dialog: MatDialog) { 
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator.mustHaveAt])],
      message: ['', Validators.required]
    })
  }

  ngOnInit(){
    this.loaded = true;
  }
  

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(number > 70){
      this.document.getElementById('nav').classList.add('sticky');
    }
    else{
      this.document.getElementById('nav').classList.remove('sticky');
    }
    
    document.getElementById("menu").addEventListener("click", function(event){
      // let att = document.createAttribute('class');
      // att.value = "current";
      // event.srcElement.parentElement.setAttributeNode(att);
      event.preventDefault();
    });
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(number > 70){
      this.document.getElementById('nav').classList.add('sticky');
    }
    else{
      this.document.getElementById('nav').classList.remove('sticky');
    }
    
    document.getElementById("menu").addEventListener("click", function(event){
      event.preventDefault();
    });
  }

  onResponsive(event: Event){
    this.responsive = true;
    this.navToggle = !this.navToggle;
    if(this.navToggle){
      this.document.getElementById('nav').classList.add('bgc');
      this.document.getElementById('menu').style.display = "block";
    }
    else{
      this.document.getElementById('nav').classList.remove('bgc');
      this.document.getElementById('menu').style.display = "none";
    }
    event.preventDefault()
  }

  onMenuSelect(event: Event){
    if(this.responsive){
      this.document.getElementById('nav').classList.remove('bgc');
      this.document.getElementById('menu').style.display = "none";
      event.preventDefault()
    }
  }

  onSubmit(){
   if(this.form.valid){
     let name = this.form.get('name').value;
     let email = this.form.get('email').value;
     let message = this.form.get('message').value;
     let RequestForm = {name, email, message};
     this.document.getElementById('send-form').innerHTML = "Waiting ..."
     
     this.fDb.database.ref('/messages').push(RequestForm).then( data => {
       this.document.getElementById('send-form').classList.add('done')
       this.document.getElementById('send-form').innerHTML = "Success!"
       this.form.reset()
       setTimeout(function() {
        document.getElementById('send-form').classList.remove('done');
        this.document.getElementById('send-form').innerHTML = "Send Message"
      }, 3000);
     }).catch(Error => {
       console.log(Error)
       document.getElementById('send-from').classList.add('error');
       document.getElementById('send-form').innerHTML = "Error";
       setTimeout(function() {
        document.getElementById('send-form').classList.remove('error');
        this.document.getElementById('send-form').innerHTML = "Send Message"
      }, 5000);
     })

   }
  }

  onWorkClick(index: number){
    let dialogRef = this.dialog.open(DialogComponent, {
      data: PORTFOLIO[index],
      height: '400px',
      width: '600px',
    });
  }

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }

  get message(){
    return this.form.get('message');
  }

}
