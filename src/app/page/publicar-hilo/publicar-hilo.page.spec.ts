import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicarHiloPage } from './publicar-hilo.page';

describe('PublicarHiloPage', () => {
  let component: PublicarHiloPage;
  let fixture: ComponentFixture<PublicarHiloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarHiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
