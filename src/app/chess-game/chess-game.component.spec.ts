import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessGameComponent, Point } from './chess-game.component';

describe('ChessGameComponent', () => {
  let component: ChessGameComponent;
  let fixture: ComponentFixture<ChessGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChessGameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be [[0, 1], [0, 2], [2, 2]]', () => {
    component.result = component.calculateWinStep('x', [['o', 'e', 'e'], ['o', 'x', 'o'], ['x', 'x', 'e']]);
    const answer = [new Point(0, 1), new Point(0, 2), new Point(2, 2)]
    expect(component.result.length).toEqual(3);
    expect(component.result).toEqual(answer);
    fixture.detectChanges();
  });
  it('should be [[1, 2], [2, 0], [2, 2]]', () => {
    component.result = component.calculateWinStep('x', [['x', 'o', 'o'], ['x', 'x', 'e'], ['e', 'o', 'e']]);
    const answer = [new Point(1, 2), new Point(2, 0), new Point(2, 2)]
    expect(component.result.length).toEqual(3);
    expect(component.result).toEqual(answer);
    fixture.detectChanges();
  });

  it('should be empty result', () => {
    component.result = component.calculateWinStep('x', [['x', 'x', 'o'], ['e', 'e', 'e'], ['e', 'e', 'e']]);
    expect(component.result.length).toEqual(0);
    fixture.detectChanges();
  });
  it('should be empty result, too', () => {
    component.result = component.calculateWinStep('o', [['o', 'o', 'o'], ['e', 'e', 'e'], ['e', 'e', 'e']]);
    expect(component.result.length).toEqual(0);
    fixture.detectChanges();
  });
});
