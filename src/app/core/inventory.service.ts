import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IInventoryItem } from './models/inventory-model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private inventoryItems = new BehaviorSubject<IInventoryItem[]>([
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      stockQuantity: 10,
      lastUpdated: new Date(),
    },
    {
      id: 2,
      name: 'Desk Chair',
      category: 'Furniture',
      stockQuantity: 5,
      lastUpdated: new Date(),
    },
    {
      id: 3,
      name: 'Pen',
      category: 'Stationery',
      stockQuantity: 100,
      lastUpdated: new Date(),
    },
    {
      id: 4,
      name: 'Smartphone',
      category: 'Electronics',
      stockQuantity: 15,
      lastUpdated: new Date(),
    },
    {
      id: 5,
      name: 'Notebook',
      category: 'Stationery',
      stockQuantity: 50,
      lastUpdated: new Date(),
    },
    {
      id: 6,
      name: 'Office Desk',
      category: 'Furniture',
      stockQuantity: 8,
      lastUpdated: new Date(),
    },
    {
      id: 7,
      name: 'Monitor',
      category: 'Electronics',
      stockQuantity: 7,
      lastUpdated: new Date(),
    },
    {
      id: 8,
      name: 'Headphones',
      category: 'Electronics',
      stockQuantity: 20,
      lastUpdated: new Date(),
    },
    {
      id: 9,
      name: 'Printer',
      category: 'Electronics',
      stockQuantity: 4,
      lastUpdated: new Date(),
    },
    {
      id: 10,
      name: 'Whiteboard',
      category: 'Office Supplies',
      stockQuantity: 2,
      lastUpdated: new Date(),
    },
    {
      id: 11,
      name: 'File Cabinet',
      category: 'Furniture',
      stockQuantity: 3,
      lastUpdated: new Date(),
    },
    {
      id: 12,
      name: 'Mouse',
      category: 'Electronics',
      stockQuantity: 25,
      lastUpdated: new Date(),
    },
    {
      id: 13,
      name: 'Keyboard',
      category: 'Electronics',
      stockQuantity: 18,
      lastUpdated: new Date(),
    },
    {
      id: 14,
      name: 'Coffee Machine',
      category: 'Appliances',
      stockQuantity: 2,
      lastUpdated: new Date(),
    },
    {
      id: 15,
      name: 'Stapler',
      category: 'Stationery',
      stockQuantity: 30,
      lastUpdated: new Date(),
    },
    {
      id: 16,
      name: 'Projector',
      category: 'Electronics',
      stockQuantity: 5,
      lastUpdated: new Date(),
    },
    {
      id: 17,
      name: 'Desk Lamp',
      category: 'Furniture',
      stockQuantity: 12,
      lastUpdated: new Date(),
    },
    {
      id: 18,
      name: 'External Hard Drive',
      category: 'Electronics',
      stockQuantity: 6,
      lastUpdated: new Date(),
    },
    {
      id: 19,
      name: 'USB Flash Drive',
      category: 'Electronics',
      stockQuantity: 40,
      lastUpdated: new Date(),
    },
    {
      id: 20,
      name: 'Paper Ream',
      category: 'Office Supplies',
      stockQuantity: 200,
      lastUpdated: new Date(),
    },
  ]);

  inventory$ = this.inventoryItems.asObservable();

  getInventory(): Observable<IInventoryItem[]> {
    return this.inventory$;
  }
  addInventoryItem(item: IInventoryItem) {
    const currentItems = this.inventoryItems.getValue();
    item.id = currentItems.length + 1;
    item.lastUpdated = new Date();
    this.inventoryItems.next([...currentItems, item]);
  }
  updateInventoryItem(updatedItem: IInventoryItem) {
    const currentItems = this.inventoryItems.getValue();
    const index = currentItems.findIndex((item) => item.id === updatedItem.id);

    if (index !== -1) {
      currentItems[index] = updatedItem;
      this.inventoryItems.next([...currentItems]);
    }
  }
}
