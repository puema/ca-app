import { Component, ElementRef, Renderer, AfterViewInit, ViewChild, Input, Injectable } from "@angular/core";

const BLUR_DEFAULT : number = 5;
const OPACITY_DEFAULT : number = 0.8;
const COLOR_DEFAULT : string = 'white';

@Injectable()
@Component({
  selector: 'mp-blurred-scroll',
  templateUrl: './mp-blurred-scroll.component.html',
  styleUrls: ['./mp-blurred-scroll.component.css'],
})
export class MpBlurredScrollComponent implements AfterViewInit {

  @ViewChild('header') header : ElementRef;
  @ViewChild('content') content : ElementRef;

  @Input('blur') blur : number = BLUR_DEFAULT;
  @Input('opacity') opacity : number = OPACITY_DEFAULT;
  @Input('color') color : string = COLOR_DEFAULT;

  private blurredContent : Node;

  private headerHeight : number;

  constructor (private element : ElementRef, private renderer : Renderer) {
    this.addScrollListener();
  }

  ngAfterViewInit () {
    this.headerHeight = this.header.nativeElement.clientHeight;

    this.blurredContent = this.content.nativeElement.cloneNode(true);
    this.header.nativeElement.after(this.blurredContent);

    this.header.nativeElement.nextSibling.className = 'blurred-content';
    this.renderer.setElementStyle(this.header.nativeElement.firstElementChild, 'opacity', this.opacity.toString());
    this.renderer.setElementStyle(this.header.nativeElement.firstElementChild, 'background-color', this.color);
    this.renderer.setElementStyle(this.content.nativeElement, 'height', `calc(100% - ${this.headerHeight}px)`);
    this.renderer.setElementStyle(this.content.nativeElement, 'top', `${this.headerHeight}px`);
    this.renderer.setElementStyle(this.blurredContent, 'height', `calc(100% - ${this.headerHeight}px)`);
    this.renderer.setElementStyle(this.blurredContent, 'padding-top', `${this.headerHeight}px`);
    this.renderer.setElementStyle(this.blurredContent, 'filter', `blur(${this.blur}px)`);

  }

  private addScrollListener () {
    this.element.nativeElement.addEventListener('scroll', (e) => {
      this.renderer.setElementStyle(this.blurredContent, 'transform', `translate3d(0, ${-e.target.scrollTop}px, 0)`);
    }, true);
  }

}
