import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnewAddressPage } from './addnew-address.page';

describe('AddnewAddressPage', () => {
  let component: AddnewAddressPage;
  let fixture: ComponentFixture<AddnewAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
