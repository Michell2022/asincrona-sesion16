import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuperuComponent } from './menuperu.component';

describe('MenuperuComponent', () => {
  let component: MenuperuComponent;
  let fixture: ComponentFixture<MenuperuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuperuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuperuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
