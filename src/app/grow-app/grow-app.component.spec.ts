import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowAppComponent } from './grow-app.component';

describe('GrowAppComponent', () => {
  let component: GrowAppComponent;
  let fixture: ComponentFixture<GrowAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
