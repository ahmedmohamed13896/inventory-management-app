# Inventory Management System

## 📌 Overview

This project is an **Inventory Management System** built with **Angular**. It allows users to manage inventory items efficiently by adding, editing, searching, and filtering products.

## 🏗️ Architectural Decisions

### 1️⃣ **Modular Structure**

- The application is structured using **feature modules** for better scalability.
- Routes are lazily loaded to optimize performance.

### 2️⃣ **State Management**

- Uses **RxJS BehaviorSubject** in `InventoryService` to manage the inventory state reactively.
- Ensures real-time UI updates without unnecessary API calls.

### 3️⃣ **Lazy Loading**

- Implemented lazy loading in the routing module to improve application performance.

### 4️⃣ **Reactive Forms**

- Switched from **Template-driven forms** to **Reactive Forms** for better validation and control over form state.

### 5️⃣ **Debounced Search**

- Implemented **debounceTime** in `searchQuery` to optimize filtering performance and reduce redundant processing.

### 6️⃣ **Angular Material for UI**

- Used **Angular Material** for a modern UI, including `MatTable`, `MatFormField`, and `MatSnackBar`.

### 7️⃣ **Unit Testing**

- Added **Jasmine & Karma** unit tests for services and components.

---

## 🚀 Tech Stack

| Technology           | Purpose                                 |
| -------------------- | --------------------------------------- |
| **Angular 17+**      | Frontend framework                      |
| **Angular CLI**      | Project setup & build tool              |
| **RxJS**             | State management & reactive programming |
| **Angular Material** | UI components                           |
| **Bootstrap**        | Additional styling                      |
| **Karma & Jasmine**  | Unit testing                            |

---

## 📂 Folder Structure

```
📦 inventory-management
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 core
 ┃ ┃ ┃ ┣ 📄 inventory.service.ts  // Inventory state management
 ┃ ┃ ┣ 📂 features
 ┃ ┃ ┃ ┣ 📂 inventory-list  // List view with search & filter
 ┃ ┃ ┃ ┣ 📂 inventory-detail // Create & edit form (Reactive Forms)
 ┃ ┃ ┣ 📂 shared  // Shared UI components & Material module
 ┃ ┃ ┣ 📄 app-routing.module.ts  // Lazy loading routes
 ┃ ┃ ┣ 📄 app.component.ts  // Root component
 ┃ ┣ 📂 assets  // Static assets (icons, images)
 ┣ 📄 angular.json  // Angular config file
 ┣ 📄 package.json  // Dependencies & scripts
 ┣ 📄 README.md  // Documentation
```

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-repo/inventory-management.git
cd inventory-management

# Install dependencies
npm install

# Run the application
ng serve -o
```

---

## ✅ Features Implemented

✔ Add, Edit, and Delete Inventory Items  
✔ Search & Filter with Debounced Input  
✔ State Management with RxJS  
✔ UI with Angular Material  
✔ Optimized Performance with Lazy Loading  
✔ Unit Testing with Jasmine & Karma
