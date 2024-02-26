import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairOnecontentComponent } from './repair-onecontent.component';

describe('RepairOnecontentComponent', () => {
  let component: RepairOnecontentComponent;
  let fixture: ComponentFixture<RepairOnecontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairOnecontentComponent]
    });
    fixture = TestBed.createComponent(RepairOnecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
