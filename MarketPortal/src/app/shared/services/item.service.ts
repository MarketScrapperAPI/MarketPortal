import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:3000/api/items';

  private items: Item[] = [
    {
      uuid: '1',
      name: 'Item 1',
      brand: 'Brand 1',
      package: 'Package 1',
      price_per_item: 1,
      price_per_quantity: 1,
      quantity_unit: 'Unit 1',
      url: 'Url 1',
      image_url: 'Image Url 1',
      market_name: 'Market Name 1',
      market_location: 'Market Location 1',
      market_logo: 'market_logo_1',
      created_at: 'Created At 1',
      updated_at: 'Updated At 1'
    }
  ];

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
