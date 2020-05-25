import { Component, AfterViewInit, Renderer2 } from '@angular/core';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: any;

  constructor(private renderer: Renderer2) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    // hide preloader
    const preloader: HTMLElement = document.getElementById('preloader');
    this.renderer.addClass(preloader, 'loaded');
  }
}
