import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarInventarioComponent } from './entregar-inventario.component';

describe('EntregarInventarioComponent', () => {
  let component: EntregarInventarioComponent;
  let fixture: ComponentFixture<EntregarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregarInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
