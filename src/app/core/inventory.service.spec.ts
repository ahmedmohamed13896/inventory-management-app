import { TestBed } from '@angular/core/testing';
import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  it('should add a new item', () => {
    const item = {
      id: 1,
      name: 'Test',
      category: 'Test',
      stockQuantity: 10,
      lastUpdated: new Date(),
    };
    service.addInventoryItem(item);

    service.getInventory().subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items[0].name).toBe('Test');
    });
  });

  it('should update an existing item', () => {
    const item = {
      id: 1,
      name: 'Test',
      category: 'Test',
      stockQuantity: 10,
      lastUpdated: new Date(),
    };
    service.addInventoryItem(item);

    const updatedItem = { ...item, name: 'Updated' };
    service.updateInventoryItem(updatedItem);

    service.getInventory().subscribe((items) => {
      expect(items[0].name).toBe('Updated');
    });
  });
});
