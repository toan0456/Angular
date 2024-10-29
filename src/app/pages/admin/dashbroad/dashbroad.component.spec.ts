import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbroadComponent } from './dashbroad.component';

describe('DashbroadComponent', () => {
  let component: DashbroadComponent;
  let fixture: ComponentFixture<DashbroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbroadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
