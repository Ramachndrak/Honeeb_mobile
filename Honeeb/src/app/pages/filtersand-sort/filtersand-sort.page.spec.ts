import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltersandSortPage } from './filtersand-sort.page';

describe('FiltersandSortPage', () => {
  let component: FiltersandSortPage;
  let fixture: ComponentFixture<FiltersandSortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersandSortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersandSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
