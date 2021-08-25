import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BimatePage } from './bimate.page';

describe('BimatePage', () => {
  let component: BimatePage;
  let fixture: ComponentFixture<BimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BimatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
