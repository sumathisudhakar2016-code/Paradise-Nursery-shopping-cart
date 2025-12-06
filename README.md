# Paradise Nursery Shopping Cart

A beautiful, responsive shopping cart application for Paradise Nursery, built with React and Vite.

## Features

- **Landing Page**: Immersive welcome screen with call-to-action.
- **Product Listing**: Categorized plant listing (Air Purifying, Aromatic) with high-quality images.
- **Shopping Cart**: Fully functional cart with quantity management and total cost calculation.
- **State Management**: **Redux Toolkit** for efficient global state management.
- **Responsive Design**: Mobile-friendly layout using Modern CSS.

## Project Setup Step-by-Step

This section details the process used to build this application, from initialization to Redux integration.

### 1. Project Initialization
- Created the project using Vite for a fast development environment.
  ```bash
  npm create vite@latest paradise-nursery -- --template react
  cd paradise-nursery
  npm install
  ```
- Cleaned up default template files (`App.css`, `index.css`).
- Installed `react-router-dom` for navigation.

### 2. Basic Structure & Components
- Created a `components` folder.
- **Landing Page**: Created a welcoming hero section with a background image and a "Get Started" button using `Link` for navigation.
- **Navbar**: Built a responsive navigation bar with a dynamic cart icon that shows the total number of items.
- **Product List**: Created a data-driven component that maps through an array of plant objects, categorized into sections.
- **Cart**: Designed a cart page to list selected items, manage quantities, and show totals.

### 3. Styling
- Defined CSS variables in `index.css` for consistent colors (Forest Green, Terra Cotta) and fonts (Outfit).
- Implemented a "Glassmorphism" effect for cards and overlays.
- Used CSS Flexbox and Grid for responsive layouts.

### 4. State Management with Redux
Integrated Redux to manage the shopping cart state globally.

1.  **Install Dependencies**:
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```
2.  **Create Redux Slice (`src/redux/CartSlice.jsx`)**:
    -   Defined `initialState` with an empty `cartItems` array.
    -   Created reducers: `addItem`, `removeItem`, `updateQuantity`.
    -   Exported actions and the reducer.
3.  **Configure Store (`src/redux/store.js`)**:
    -   Configured the store using `configureStore` and added the `cartReducer`.
4.  **Provide Store**:
    -   Wrapped the main `App` component in `src/main.jsx` with the `<Provider store={store}>`.

### 5. Connecting Components
- **Product List**: Used `useDispatch` to add items to the global store when "Add to Cart" is clicked.
- **Navbar**: Used `useSelector` to access the cart state and display the total quantity badge in real-time.
- **Cart**: Used `useSelector` to retrieve cart items and `useDispatch` to handle quantity updates and item removal.

---

## Getting Started

1.  Navigate to the project directory:
    ```bash
    cd Paradise-Nursery-shopping-cart
    ```

2.  Install dependencies (if not already done):
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at the Local URL provided (usually `http://localhost:5173`).

## Technologies Used

-   React 18
-   Vite
-   React Router DOM
-   **Redux Toolkit & React-Redux**
-   Vanilla CSS (Modern features: Variables, Flexbox, Grid, Glassmorphism)
