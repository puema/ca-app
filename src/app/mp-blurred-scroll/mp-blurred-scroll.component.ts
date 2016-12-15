import {
  Component, ElementRef, Renderer, AfterViewInit, ViewChild, ContentChildren, TemplateRef,
  AfterContentInit, HostListener, Input, OnInit
} from "@angular/core";

@Component({
  selector: 'mp-blurred-scroll',
  templateUrl: './mp-blurred-scroll.component.html',
  styleUrls: ['./mp-blurred-scroll.component.less'],
})
export class MpBlurredScrollComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('header') header : ElementRef;
  @ViewChild('content') content : ElementRef;

  @Input('blur') blur : number;
  @Input('opacity') opacity : number;

  private blurredContent : Node;

  private headerHeight : number;

  constructor (private element : ElementRef, private renderer : Renderer) {
    this.addScrollListener();
  }

  private addScrollListener () {
    this.element.nativeElement.addEventListener('scroll', (e) => {
      this.renderer.setElementStyle(this.blurredContent, 'transform', `translate3d(0, ${-e.target.scrollTop}px, 0)`);
    }, true);
  }

  ngAfterViewInit () {
    this.blurredContent = this.content.nativeElement.cloneNode(true);

    this.header.nativeElement.after(this.blurredContent);
    this.header.nativeElement.nextSibling.className = 'blurred-content';

    this.renderer.setElementStyle(this.header.nativeElement.firstElementChild, 'opacity', this.opacity.toString());
    this.renderer.setElementStyle(this.content.nativeElement, 'height', `calc(100% - ${this.headerHeight}px)`);
    this.renderer.setElementStyle(this.content.nativeElement, 'top', `${this.headerHeight}px`);
    this.renderer.setElementStyle(this.blurredContent, 'height', `calc(100% - ${this.headerHeight}px)`);
    this.renderer.setElementStyle(this.blurredContent, 'padding-top', `${this.headerHeight}px`);
    this.renderer.setElementStyle(this.blurredContent, 'filter', `blur(${this.blur}px)`)

  }

  ngAfterContentInit () {
    console.log(this.header.nativeElement.clientHeight);
    this.headerHeight = this.header.nativeElement.clientHeight;
  }

  ngOnInit () {

  }

}
