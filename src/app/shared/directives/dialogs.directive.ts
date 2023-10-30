import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDialogs]',
})
export class DialogsDirective {
  private delete: string = '';

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {}

  @Input('delete') set enabled(condition: string) {
    this.delete = condition;
    if (this.delete === 'delete') {
      this.setBackgroundDelete();
    } else if (this.delete === 'success') {
      this.setBackgroundConfirm();
    }
  }

  setBackgroundDelete() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      '#FF4720'
    );

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');

    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px');

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'padding-inline',
      '1rem'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-radius',
      '0.25rem'
    );
  }

  setBackgroundConfirm() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');

    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '16px');

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'padding-inline',
      '1rem'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-radius',
      '0.25rem'
    );
  }
}
