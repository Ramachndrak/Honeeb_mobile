import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAllCategoriePage } from './view-all-categorie.page';

describe('ViewAllCategoriePage', () => {
  let component: ViewAllCategoriePage;
  let fixture: ComponentFixture<ViewAllCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
