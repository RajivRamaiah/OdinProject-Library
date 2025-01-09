function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';

    const menuItems = [
        {
            name: "Margherita Pizza",
            description: "Fresh tomatoes, mozzarella, basil",
            price: "$14.99"
        },
        {
            name: "Spaghetti Carbonara",
            description: "Creamy sauce with pancetta and pecorino",
            price: "$16.99"
        },
        {
            name: "Lasagna",
            description: "Layered pasta with meat sauce and cheese",
            price: "$18.99"
        },
        {
            name: "Tiramisu",
            description: "Classic Italian coffee-flavored dessert",
            price: "$8.99"
        }
    ];

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuGrid.appendChild(menuItem);
    });

    menu.appendChild(menuTitle);
    menu.appendChild(menuGrid);

    return menu;
}

export default createMenu;