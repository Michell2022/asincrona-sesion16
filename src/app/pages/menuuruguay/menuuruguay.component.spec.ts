import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuuruguayComponent } from './menuuruguay.component';

describe('MenuuruguayComponent', () => {
  let component: MenuuruguayComponent;
  let fixture: ComponentFixture<MenuuruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuuruguayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuuruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
