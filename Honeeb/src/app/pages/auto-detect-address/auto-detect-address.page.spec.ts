import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoDetectAddressPage } from './auto-detect-address.page';

describe('AutoDetectAddressPage', () => {
  let component: AutoDetectAddressPage;
  let fixture: ComponentFixture<AutoDetectAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDetectAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoDetectAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
