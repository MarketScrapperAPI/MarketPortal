import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Item, ItemListResponse } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:8080/api/v1/items';

  private items: Item[] = [];
  private itemsUpdated = new Subject<ItemListResponse>();

  getItemsUpdatedListener() {
    return this.itemsUpdated.asObservable();
  }

  getItems(queryParams:Map<string, string | number>) {
    let url = this.apiUrl + '?'+ Array.from(queryParams.keys()).map(key => key + '=' + queryParams.get(key)).join('&');
    console.log(url);
    this.http.get<ItemListResponse>(url)
    .subscribe((itemListResponse: ItemListResponse) => {
      this.items = itemListResponse.ListItemsResponse;
      this.itemsUpdated.next(itemListResponse);
    })
  }



  constructor(private http: HttpClient) { }
}
