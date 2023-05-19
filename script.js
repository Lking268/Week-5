
// Array to store menu items
const menuItems = [
    { name: 'Hamburger', price: 8.99 },
    { name: 'Cheeseburger', price: 9.99 },
    { name: 'Chicken Sandwich', price: 7.99 },
    { name: 'French Fries', price: 3.99 },
    { name: 'Onion Rings', price: 4.99 },
    { name: 'Soda', price: 1.99 }
  ];
  
  // Function to display the menu
  function displayMenu() {
    console.log('Welcome to the Menu App!');
    console.log('-----------------------');
    console.log('Menu Items:');
    
    menuItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
  }
  
  // Function to add a new menu item
  function addMenuItem(name, price) {
    const newItem = { name, price };
    menuItems.push(newItem);
    console.log(`New item '${name}' added to the menu.`);
  }
  
  // Example usage:
  displayMenu();
  addMenuItem('Salad', 6.99);
  
  