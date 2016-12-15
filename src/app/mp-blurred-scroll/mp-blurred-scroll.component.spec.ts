/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MpBlurredScrollComponent } from "./mp-blurred-scroll.component";

describe('MpBlurredScrollComponent', () => {
  let component: MpBlurredScrollComponent;
  let fixture: ComponentFixture<MpBlurredScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpBlurredScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpBlurredScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
