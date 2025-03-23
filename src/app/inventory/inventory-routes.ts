import { Routes } from '@angular/router';
import { InventoryDetailComponent } from './pages/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';

export const inventoryRoutes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: ':id', component: InventoryDetailComponent },
];
