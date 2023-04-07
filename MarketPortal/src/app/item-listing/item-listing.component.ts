import { Component } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent {

  mockedItems: Item[] = [
    {
      uuid: '1',
      name: 'Iogurtes Yoggi',
      brand: 'Brand 1',
      package: 'Package 1',
      price_per_item: 1,
      price_per_quantity: 1,
      quantity_unit: 'Unit 1',
      url: 'Url 1',
      image_url: 'https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw97838415/images/hi-res/002160325.jpg?sw=500&sh=500&sm=fit&bgcolor=FFFFFF',
      market_name: 'Continente',
      market_location: 'Online',
      market_logo: 'https://pbs.twimg.com/profile_images/662588354836504577/XUFC6xGj_400x400.png',
      created_at: 'Created At 1',
      updated_at: 'Updated At 1'
    },
    {
      uuid: '2',
      name: 'Estante 1x2 Cubos 41x39x76cm',
      brand: 'Kasa',
      package: 'Package 2',
      price_per_item: 2,
      price_per_quantity: 2,
      quantity_unit: 'Unit 2',
      url: 'Url 2',
      image_url: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw3d07b6ee/images/col/528/5280542-frente.jpg?sw=400&sh=300',
      market_name: 'Market Name 2',
      market_location: 'Market Location 2',
      market_logo: 'https://pbs.twimg.com/profile_images/662588354836504577/XUFC6xGj_400x400.png',
      created_at: 'Created At 2',
      updated_at: 'Updated At 2'
    },
    {
      uuid: '3',
      name: 'Item 3',
      brand: 'Brand 3',
      package: 'Package 3',
      price_per_item: 3,
      price_per_quantity: 3,
      quantity_unit: 'Unit 3',
      url: 'Url 3',
      image_url: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwc0fe5fca/images/col/739/7392376-frente.jpg?sw=400&sh=300',
      market_name: 'Market Name 3',
      market_location: 'Market Location 3',
      market_logo: 'https://pbs.twimg.com/profile_images/662588354836504577/XUFC6xGj_400x400.png',
      created_at: 'Created At 3',
      updated_at: 'Updated At 3'
    },
    {
      uuid: '1',
      name: 'Item 1',
      brand: 'Brand 1',
      package: 'Package 1',
      price_per_item: 1,
      price_per_quantity: 1,
      quantity_unit: 'Unit 1',
      url: 'Url 1',
      image_url: 'https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw462ef6f5/images/hi-res/002438306.jpg?sw=500&sh=500&sm=fit&bgcolor=FFFFFF',
      market_name: 'Market Name 1',
      market_location: 'Market Location 1',
      market_logo: 'https://pbs.twimg.com/profile_images/662588354836504577/XUFC6xGj_400x400.png',
      created_at: 'Created At 1',
      updated_at: 'Updated At 1'
    },
    {
      uuid: '2',
      name: 'Item 2',
      brand: 'Brand 2',
      package: 'Package 2',
      price_per_item: 2,
      price_per_quantity: 2,
      quantity_unit: 'Unit 2',
      url: 'Url 2',
      image_url: 'https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw97838415/images/hi-res/002160325.jpg?sw=500&sh=500&sm=fit&bgcolor=FFFFFF',
      market_name: 'Market Name 2',
      market_location: 'Market Location 2',
      market_logo: 'https://pbs.twimg.com/profile_images/662588354836504577/XUFC6xGj_400x400.png',
      created_at: 'Created At 2',
      updated_at: 'Updated At 2'
    },
    {
      uuid: '3',
      name: 'Item 3',
      brand: 'Brand 3',
      package: 'Package 3',
      price_per_item: 3,
      price_per_quantity: 3,
      quantity_unit: 'Unit 3',
      url: 'Url 3',
      image_url: 'https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw97838415/images/hi-res/002160325.jpg?sw=500&sh=500&sm=fit&bgcolor=FFFFFF',
      market_name: 'Market Name 3',
      market_location: 'Market Location 3',
      market_logo: 'https://pbs.twimg.com/profile_images/662588354836504577/XUFC6xGj_400x400.png',
      created_at: 'Created At 3',
      updated_at: 'Updated At 3'
    }
  ];

  items: Item[] = this.mockedItems;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    /*
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });*/
  }
}
