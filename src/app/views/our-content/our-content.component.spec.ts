import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurContentComponent } from './our-content.component';

describe('OurContentComponent', () => {
  let component: OurContentComponent;
  let fixture: ComponentFixture<OurContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurContentComponent]
    });
    fixture = TestBed.createComponent(OurContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
