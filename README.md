The *Supermarket Billing System* is designed to simulate the billing process in a retail store.  
It allows the cashier to input *product name, price, and quantity*, and automatically calculates the total amount for each item and the overall bill.

### Key Concepts Used:
- *HTML*: Provides the structure of the application, including input fields, buttons, and display areas for the cart and total.
- *CSS*: Styles the layout, colors, spacing, and makes the interface user-friendly and visually appealing.
- *JavaScript*: Implements the logic for:
  - Adding items to the cart
  - Calculating individual item totals (price * quantity)
  - Maintaining a running total of the cart
  - Dynamically updating the web page without reloading
- *Event Handling*: JavaScript onclick and addEventListener are used to capture user actions and update the UI.
- *DOM Manipulation*: Adding list elements (<li>) and updating text (.textContent) to reflect cart items and total bill.

### How it Works:
1. User enters product details (name, price, quantity) in input fields.
2. On clicking “Add to Cart”, JavaScript calculates the total for that item.
3. The item is displayed in the cart list, and the overall total is updated dynamically.
4. Checkout button becomes active when at least one item is added.

This project helps students understand the integration of *HTML, CSS, and JavaScript* to build a functional web application.
