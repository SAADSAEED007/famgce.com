// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle'); // Ensure this ID matches your HTML
const navLinks = document.getElementById('nav-links'); // Ensure this ID matches your HTML

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class for mobile menu
});

// Smooth scrolling for navigation links with event delegation
document.querySelector('nav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute('href')); // Get the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
        }

        // Close mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active'); // Remove 'active' class
        }
    }
});

// Form validation
const form = document.getElementById('contact-form'); // Ensure this ID matches your HTML
if (form) {
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value.trim(); // Get name input
        const email = document.getElementById('email').value.trim(); // Get email input
        const message = document.getElementById('message').value.trim(); // Get message input

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.'); // Alert if fields are empty
            e.preventDefault(); // Prevent form submission
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.'); // Alert if email is invalid
            e.preventDefault(); // Prevent form submission
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    return re.test(String(email).toLowerCase()); // Validate email
}

// Smooth scrolling to services section (if you have a button to trigger this)
function scrollToServices() {
    const servicesSection = document.getElementById('services'); // Make sure this ID exists
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Partners logos display
const partnerLogos = [
    'WhatsApp Image 2024-10-22 at 06.56.13_edcdd7d8.jpg', // Update with actual paths to logos
    'WhatsApp Image 2024-10-22 at 06.56.14_4e8c6c13.jpg',
    'WhatsApp Image 2024-10-22 at 08.43.49_16f1d0c7.jpg', // Added new partner logo
    'WhatsApp Image 2024-10-22 at 08.43.53_8a69beca.jpg', // Added new partner logo
    'WhatsApp Image 2024-10-22 at 08.43.56_dfc806c4.jpg', // Added new partner logo
    'WhatsApp Image 2024-10-22 at 08.44.55_01299534.jpg'  // Added new partner logo
];

function displayPartners() {
    const partnersContainer = document.querySelector('.partner-logos'); // Update to match your HTML class
    if (partnersContainer) { // Ensure the container exists
        partnersContainer.innerHTML = ''; // Clear any existing logos to avoid duplication
        partnerLogos.forEach(logo => {
            const img = document.createElement('img');
            img.src = logo; // Set logo source
            img.alt = 'Partner Logo'; // Set alt text
            img.classList.add('partner-logo'); // Add class for styling
            partnersContainer.appendChild(img); // Append the logo to the container
        });
    }
}

// Call the function to display the logos
displayPartners();

// Add contact information to contact section dynamically
const contactSection = document.getElementById('contact'); // Ensure this ID matches your HTML
const contactInfoHtml = `
    <h3>Muhammad Zeeshan</h3>
    <p>Sales and Marketing Executive</p>
    <p>Mobile: +966 560 385 462</p>
    <p>PO Box 25514</p>
    <p>Postal Code 31961</p>
    <p>Kingdom of Saudi Arabia</p>
`;

// Check if contact information is already present before adding
if (contactSection && !contactSection.querySelector('h3')) {
    contactSection.innerHTML += contactInfoHtml; // Append the contact information to the contact section
}
