import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../../shared/material.module';
import { InventoryService } from '../../../core/inventory.service';
import { IInventoryItem } from '../../../core/models/inventory-model';

@Component({
  selector: 'app-inventory-detail',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './inventory-detail.component.html',
})
export class InventoryDetailComponent {
  private route = inject(ActivatedRoute);
  private inventoryService = inject(InventoryService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  inventoryItem!: IInventoryItem;
  id: string | null = 'new';
  private fb = inject(FormBuilder);
  inventoryForm!: FormGroup;

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    // Initialize the reactive form with validation
    this.inventoryForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      stockQuantity: [0, [Validators.required, Validators.min(0)]],
    });

    if (this.id === 'new') {
      this.inventoryItem = {
        id: 0,
        name: '',
        category: '',
        stockQuantity: 0,
        lastUpdated: new Date(),
      };
    } else {
      this.inventoryService.getInventory().subscribe((items) => {
        const item = items.find((i) => i.id === Number(this.id));
        if (item) {
          this.inventoryItem = { ...item };
        }
      });
    }
  }

  saveItem() {
    if (this.inventoryForm.invalid) return;

    const inventoryItem: IInventoryItem = {
      id: this.id === 'new' ? 0 : Number(this.id),
      ...this.inventoryForm.value,
      lastUpdated: new Date(),
    };

    if (inventoryItem.id === 0) {
      this.inventoryService.addInventoryItem(inventoryItem);
    } else {
      this.inventoryService.updateInventoryItem(inventoryItem);
    }

    this.showToast('Item saved successfully!');
    this.router.navigate(['/']);
  }

  showToast(message: string, action: string = 'OK') {
    this.snackBar.open(message, action, {
      duration: 30000, // Toast disappears after 3 seconds
      horizontalPosition: 'end', // Align right
      verticalPosition: 'top', // Show at the top
      panelClass: ['custom-snackbar'], // Optional custom styling
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
