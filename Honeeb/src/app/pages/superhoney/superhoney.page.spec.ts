import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperhoneyPage } from './superhoney.page';

describe('SuperhoneyPage', () => {
  let component: SuperhoneyPage;
  let fixture: ComponentFixture<SuperhoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperhoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperhoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
