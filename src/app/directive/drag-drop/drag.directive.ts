import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { Event } from '@angular/router/src/events';

@Directive({
  selector: '[appDrag][draggedClass]'
})
export class DragDirective {

  private _isDraggble = false;

  @Input('appDrag')
  set isDraggble(val: boolean) {
    this._isDraggble = val;
    this.rd.setAttribute(this.el.nativeElement, 'dragable', `${val}`);
  }

  get isDraggble() {
    return this._isDraggble;
  }

  @Input() draggedClass: string;
  constructor(private el: ElementRef, private rd: Renderer2) { }

  @HostListener('dragStart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }
  }

  @HostListener('dragEnd', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
