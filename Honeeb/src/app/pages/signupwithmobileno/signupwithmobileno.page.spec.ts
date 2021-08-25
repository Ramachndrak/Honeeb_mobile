import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupwithmobilenoPage } from './signupwithmobileno.page';

describe('SignupwithmobilenoPage', () => {
  let component: SignupwithmobilenoPage;
  let fixture: ComponentFixture<SignupwithmobilenoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupwithmobilenoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupwithmobilenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
