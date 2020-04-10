import { Component, OnInit, ElementRef } from '@angular/core';
import { LazyLoadScriptService } from '../lazyloadscript.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  runtimeRange;
  filterRuntimeConfig: any = {
    start: [60, 120],
    step: 1,
    range:
    {
      min: 66,
      max: 191
    },
    connect: true
  };
  constructor(private scriptService: LazyLoadScriptService) {}

  ngOnInit(): void {
    this.scriptService.loadScript('../../assets/js/jquery-3.3.1.min.js');
    //this.scriptService.loadScript('../../../node_modules/popper.js/dist/umd/popper.min.js');
    this.scriptService.loadScript('../../assets/js/bootstrap.bundle.min.js');
    this.scriptService.loadScript('../../assets/js/owl.carousel.min.js');
    this.scriptService.loadScript('../../assets/js/jquery.mousewheel.min.js');
    this.scriptService.loadScript('../../assets/js/jquery.mCustomScrollbar.min.js');
    this.scriptService.loadScript('../../assets/js/wNumb.js');
    this.scriptService.loadScript('../../assets/js/nouislider.min.js');
    this.scriptService.loadScript('../../assets/js/plyr.min.js');
    this.scriptService.loadScript('../../assets/js/jquery.morelines.min.js');
    this.scriptService.loadScript('../../assets/js/photoswipe.min.js');
    this.scriptService.loadScript('../../assets/js/photoswipe-ui-default.min.js');
    this.scriptService.loadScript('../../assets/js/main.js');
  }
}
