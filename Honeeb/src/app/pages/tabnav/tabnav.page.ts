import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.page.html',
  styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {

  @ViewChild(IonTabs)
  public tabs: IonTabs;
  PageTitle: any;
  constructor() { }

  ngOnInit() {
  }
  setTitle() {
    const currentTab: string = this.tabs.getSelected();
    //const matchingTab: string = this.tabsList.filter((tab: any) => tab.name === currentTab)[0]; //uses the first array element as the currentTab
    this.PageTitle = currentTab;
  } 

}
