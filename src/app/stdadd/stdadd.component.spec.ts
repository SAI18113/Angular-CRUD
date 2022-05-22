import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdaddComponent } from './stdadd.component';

describe('StdaddComponent', () => {
  let component: StdaddComponent;
  let fixture: ComponentFixture<StdaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
