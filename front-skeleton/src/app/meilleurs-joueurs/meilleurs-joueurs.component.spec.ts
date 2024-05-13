import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursJoueursComponent } from './meilleurs-joueurs.component';

describe('MeilleursJoueursComponent', () => {
  let component: MeilleursJoueursComponent;
  let fixture: ComponentFixture<MeilleursJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeilleursJoueursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeilleursJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
