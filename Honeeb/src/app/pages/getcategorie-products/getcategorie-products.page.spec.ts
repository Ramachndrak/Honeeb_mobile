import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetcategorieProductsPage } from './getcategorie-products.page';

describe('GetcategorieProductsPage', () => {
  let component: GetcategorieProductsPage;
  let fixture: ComponentFixture<GetcategorieProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcategorieProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetcategorieProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
