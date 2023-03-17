import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigmaNgComponent } from './sigma-ng.component';

describe('SigmaNgComponent', () => {
  let component: SigmaNgComponent;
  let fixture: ComponentFixture<SigmaNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigmaNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigmaNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
