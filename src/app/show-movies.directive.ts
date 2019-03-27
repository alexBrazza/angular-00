import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMovies]'
})
export class ShowMoviesDirective {
  displayMovieList:boolean=true;
  
  @Input() set appShowMovies(condition:boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    }
    else {
      this.vwRef.clear();
    }
  }
    constructor(private tplRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }
  
  }


