import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chessboard2Component } from './chessboard2.component';

describe('Chessboard2Component', () => {
  let component: Chessboard2Component;
  let fixture: ComponentFixture<Chessboard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chessboard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chessboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
