function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Bella's Italian Kitchen";

    const image = document.createElement('img');
    image.src = 'restaurant-image.jpg';
    image.alt = 'Restaurant interior';

    const description = document.createElement('p');
    description.textContent = 'Welcome to Bella\'s, where authentic Italian cuisine meets modern elegance. Est. 1995.';

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>Monday: 11:00 - 22:00</p>
        <p>Tuesday: 11:00 - 22:00</p>
        <p>Wednesday: 11:00 - 22:00</p>
        <p>Thursday: 11:00 - 22:00</p>
        <p>Friday: 11:00 - 23:00</p>
        <p>Saturday: 11:00 - 23:00</p>
        <p>Sunday: 12:00 - 21:00</p>
    `;

    const location = document.createElement('div');
    location.classList.add('location');
    location.innerHTML = `
        <h2>Location</h2>
        <p>123 Italian Street</p>
        <p>Foodtown, FT 12345</p>
    `;

    home.appendChild(restaurantName);
    home.appendChild(image);
    home.appendChild(description);
    home.appendChild(hours);
    home.appendChild(location);

    return home;
}

export default createHome;