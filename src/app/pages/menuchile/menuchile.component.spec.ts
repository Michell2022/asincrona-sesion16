import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuchileComponent } from './menuchile.component';

describe('MenuchileComponent', () => {
  let component: MenuchileComponent;
  let fixture: ComponentFixture<MenuchileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuchileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuchileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
