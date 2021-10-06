import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-categorie',
  templateUrl: './view-all-categorie.page.html',
  styleUrls: ['./view-all-categorie.page.scss'],
})
export class ViewAllCategoriePage implements OnInit {
  products_category : any = [];

  constructor(private activatedroute: ActivatedRoute,private router :Router) { 
    this.products_category = JSON.parse(this.activatedroute.snapshot.paramMap.get('categories_all'));
  }
    

  ngOnInit() {
  }
  getCategorieProduct(pcategory:any)
  {
    this.router.navigate(["./getcategorie-products",{"getcategorie_product":JSON.stringify(pcategory)}])
  }

}
