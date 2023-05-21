import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item, ItemListResponse } from '../shared/models/item.model';
import { ItemService } from '../shared/services/item.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit, OnDestroy {

  itemsSub: Subscription = new Subscription;

  item_searched: string = "";
  items: Item[] = [];

  itemPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  pageSizeOptions = [5, 10, 25, 50, 100];

  sortBySelectedOption = "price_per_quantity";
  sortByOptions = [
    {value: "price_per_quantity", viewValue: "Price Per Quantity"},
    {value: "price_per_item", viewValue: "Price Per Item"},
    {value: "name", viewValue: "Name"},
    {value: "brand", viewValue: "Brand"},
  ];

  sortOrderSelectedOption = "DESC";
  sortOrderOptions = [
    {value: "ASC", viewValue: "Ascending"},
    {value: "DESC", viewValue: "Descending"}
  ]
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    
    let queryParams = new Map<string, string>([
      ["name", "pipocas"],
      ["pricePerItemGreaterThan", "0"]
    ]);

    this.itemService.getItems(queryParams);
    this.itemsSub = this.itemService.getItemsUpdatedListener()
    .subscribe((itemsResponse: ItemListResponse) => {
      this.items = itemsResponse.ListItemsResponse;
      this.totalItems = itemsResponse.pagination.total_pages*itemsResponse.pagination.per_page;
      console.log(itemsResponse)
    });
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

  public searchItem() {
    let queryParams = new Map<string, string | number>([
      ["name", this.item_searched],
      ["pricePerItemGreaterThan", "0"],
      ["page", this.itemPage],
      ["perPage", this.itemsPerPage],
      ["sortBy", this.sortBySelectedOption],
      ["sortOrder", this.sortOrderSelectedOption]
    ]);
    this.itemService.getItems(queryParams)
  }

  pageChangeEvent(event: PageEvent) {
    this.itemPage = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.searchItem();
}
}
