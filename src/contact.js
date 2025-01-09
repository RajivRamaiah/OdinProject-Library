function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <div class="phone">
            <h2>Phone</h2>
            <p>(555) 123-4567</p>
        </div>
        <div class="email">
            <h2>Email</h2>
            <p>info@bellasitalian.com</p>
        </div>
        <div class="address">
            <h2>Address</h2>
            <p>123 Italian Street</p>
            <p>Foodtown, FT 12345</p>
        </div>
    `;

    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.innerHTML = `
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
    `;

    contact.appendChild(title);
    contact.appendChild(contactInfo);
    contact.appendChild(form);

    return contact;
}

export default createContact;