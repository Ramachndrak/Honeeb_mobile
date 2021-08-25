import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilenootpPage } from './mobilenootp.page';

describe('MobilenootpPage', () => {
  let component: MobilenootpPage;
  let fixture: ComponentFixture<MobilenootpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilenootpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilenootpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
