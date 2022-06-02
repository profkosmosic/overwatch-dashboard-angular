import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTabComponent } from './hero-tab.component';

describe('HeroTabComponent', () => {
  let component: HeroTabComponent;
  let fixture: ComponentFixture<HeroTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
