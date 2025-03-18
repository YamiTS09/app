import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiloPage } from './hilo.page';

describe('HiloPage', () => {
  let component: HiloPage;
  let fixture: ComponentFixture<HiloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
