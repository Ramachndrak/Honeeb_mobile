import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-categorie',
  templateUrl: './view-all-categorie.page.html',
  styleUrls: ['./view-all-categorie.page.scss'],
})
export class ViewAllCategoriePage implements OnInit {
  products_category : any = [];

  constructor(private activatedroute: ActivatedRoute) { 
    this.products_category = JSON.parse(this.activatedroute.snapshot.paramMap.get('categories_all'));
  }
    

  ngOnInit() {
  }

}
