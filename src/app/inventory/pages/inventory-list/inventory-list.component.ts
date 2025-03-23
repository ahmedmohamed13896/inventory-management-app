import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { InventoryService } from '../../../core/inventory.service';
import { IInventoryItem } from '../../../core/models/inventory-model';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  templateUrl: './inventory-list.component.html',
})
export class InventoryListComponent {
  private inventoryService = inject(InventoryService);
  private router = inject(Router);
  inventory: IInventoryItem[] = [];
  searchQuery: string = '';
  searchSubject = new Subject<string>();
  stockFilter = '';
  filteredInventory: IInventoryItem[] = [];
  loading = false;

  constructor() {
    this.inventoryService.getInventory().subscribe((data) => {
      this.inventory = data;
      this.applyFilters();
    });
  }

  ngOnInit() {
    // Fetch initial inventory
    this.inventoryService.getInventory().subscribe((items) => {
      this.inventory = items;
      this.applyFilters();
    });

    // Debounce search input (wait 2 seconds after user stops typing)
    this.searchSubject.pipe(debounceTime(1500)).subscribe(() => {
      this.applyFilters();
      this.loading = false;
    });
  }

  onSearchChange() {
    this.loading = true;
    this.searchSubject.next(this.searchQuery); // Emit value to Subject
  }

  onFilterChange() {
    this.applyFilters(); // Emit value to Subject
  }

  editItem(id: number) {
    this.router.navigate(['/inventory', id]);
  }

  addNewItem() {
    this.router.navigate(['/inventory/new']);
  }
  applyFilters() {
    const searchTerm = this.searchQuery.toLowerCase() || '';

    this.filteredInventory = this.inventory.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) &&
        (this.stockFilter === '' ||
          (this.stockFilter === 'low' && item.stockQuantity < 5) ||
          (this.stockFilter === 'inStock' && item.stockQuantity >= 5))
    );
  }
}
