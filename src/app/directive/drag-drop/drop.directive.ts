import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Input() dragEnterClass: string;
  constructor(private el: ElementRef, private rd: Renderer2) { }

  @HostListener('dragenter', ['$event'])
  onDragenter(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragover(ev: Event) {
    if (this.el.nativeElement === ev.target) {

    }
  }

  @HostListener('dragleave', ['$event'])
  onDragleave(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
}
