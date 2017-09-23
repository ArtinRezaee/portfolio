import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/animate.min.css',
  './css/bootstrap.min.css', './css/font-awesome.min.css', './css/magnific-popup.css',
  './css/owl.carousel.css', './css/style.css', './css/skins/default.css']
})

export class AppComponent {
  title = 'app';
  navToggle: boolean = false;
  responsive: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(number > 70){
      this.document.getElementById('nav').classList.add('sticky');
    }
    else{
      this.document.getElementById('nav').classList.remove('sticky');
    }
    
    document.getElementById("nav").addEventListener("click", function(event){
      event.preventDefault()
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
    
    document.getElementById("nav").addEventListener("click", function(event){
      event.preventDefault()
    });
  }

  onResponsive(event: Event){
    this.responsive = true;
    this.navToggle = !this.navToggle;
    console.log("hello", this.navToggle,this.document.getElementById('menu'));
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

  onMenuSelect(){
    if(this.responsive){
      this.document.getElementById('nav').classList.remove('bgc');
      this.document.getElementById('menu').style.display = "none";
      event.preventDefault()
    }
  }

}
