export interface Item {
    uuid: string;
    name: string;
    brand: string;
    package: string;
    price_per_item: number;
    price_per_quantity: number;
    quantity_unit: string;
    url: string;
    image_url: string;
    market_name: string;    
    market_location: string;
    market_logo: string;
    created_at: string;
    updated_at: string;
}

export interface Pagination {
    total_pages: number;
    per_page: number;
    page: number;
}

export interface ItemListResponse {
    ListItemsResponse: Item[];
    pagination: Pagination;
}
