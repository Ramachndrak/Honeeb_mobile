import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-filtersand-sort',
  templateUrl: './filtersand-sort.page.html',
  styleUrls: ['./filtersand-sort.page.scss'],
})
export class FiltersandSortPage implements OnInit {
  type: any;

  constructor(private navParams: NavParams,private popoverCtrl:ModalController) { 
    this.type = this.navParams.get('type');
  }

  ngOnInit() {
  }
  // clickOnFilters(selectedFilter)
  // {
  //   console.log("selected Filter", selectedFilter);
  //   this.popoverCtrl.dismiss(selectedFilter);

  // }
  // clickOnSort(selectedSort)
  // {
  //   console.log("selected Filter", selectedSort);
  //   this.popoverCtrl.dismiss(selectedSort);

  // }
  closeModal()
  {
    this.popoverCtrl.dismiss();
  }

}
