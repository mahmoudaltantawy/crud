import {
  Directive,
  HostListener,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

@Directive({
  selector: "[appClickstoppropagation]",
})
export class ClickstoppropagationDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    this.el.nativeElement.style.color = "#F00";
  }

  // @HostListener("click", ["$event"])
  // public stop(event: any): void {
  //   event.stopPropagation();
  // }
}
