import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Sport Bike 1000cc',
    type: 'motos',
    price: '$12,999',
    year: '2024',
    model: 'SB-1000',
    image: '/img/moto5.jpeg',
    description: 'Potente moto deportiva con motor de 1000cc, perfecta para los amantes de la velocidad y la adrenalina. Incluye sistemas avanzados de control de tracción y ABS.'
  },
  {
    id: 2,
    name: 'Urban Scooter 125',
    type: 'scooters',
    price: '$3,499',
    year: '2024',
    model: 'US-125',
    image: '/img/moto2.jpeg',
    description: 'Scooter urbano ideal para la ciudad, con motor de 125cc y gran capacidad de almacenamiento. Perfecta combinación de estilo y funcionalidad.'
  },
  {
    id: 3,
    name: 'Adventure Bike 800',
    type: 'motos',
    price: '$10,499',
    year: '2024',
    model: 'AB-800',
    image: '/img/moto3.jpeg',
    description: 'Moto versátil para aventuras todo terreno. Motor de 800cc con excelente rendimiento tanto en carretera como fuera de ella.'
  },
  {
    id: 4,
    name: 'Electric Scooter Pro',
    type: 'scooters',
    price: '$2,999',
    year: '2024',
    model: 'ES-PRO',
    image: '/img/moto4.jpeg',
    description: 'Scooter eléctrico con autonomía de 60km, perfecto para desplazamientos urbanos. Incluye conectividad Bluetooth y app móvil.'
  },
  {
    id: 5,
    name: 'Cruiser 1500',
    type: 'motos',
    price: '$15,999',
    year: '2024',
    model: 'CR-1500',
    image: '/img/moto5.jpeg',
    description: 'Motocicleta estilo crucero con motor de 1500cc. Diseñada para viajes largos con máximo confort.'
  },
  {
    id: 6,
    name: 'City Scooter 150',
    type: 'scooters',
    price: '$3,799',
    year: '2024',
    model: 'CS-150',
    image: '/img/scooter.jpeg',
    description: 'Scooter urbano de 150cc con amplio espacio de almacenamiento y consumo eficiente.'
  },
  {
    id: 7,
    name: 'Sport Touring 1200',
    type: 'motos',
    price: '$13,999',
    year: '2024',
    model: 'ST-1200',
    image: '/img/scooter2.jpeg',
    description: 'Combinación perfecta entre deportividad y confort para largas distancias. Motor de 1200cc.'
  },
  {
    id: 8,
    name: 'Maxi Scooter 300',
    type: 'scooters',
    price: '$5,999',
    year: '2024',
    model: 'MS-300',
    image: '/img/scooter3.jpeg',
    description: 'Scooter de alta gama con motor de 300cc, ideal para ciudad y carretera. Máximo confort y prestaciones.'
  },
  {
    id: 9,
    name: 'Naked Bike 600',
    type: 'motos',
    price: '$8,999',
    year: '2024',
    model: 'NB-600',
    image: '/img/scooter4.jpeg',
    description: 'Motocicleta naked con motor de 600cc. Perfecta para ciudad y escapadas de fin de semana.'
  },
  {
    id: 10,
    name: 'Retro Scooter 125',
    type: 'scooters',
    price: '$3,299',
    year: '2024',
    model: 'RS-125',
    image: '/img/scooter5.jpeg',
    description: 'Scooter con diseño retro y tecnología moderna. Motor de 125cc ideal para ciudad.'
  },
  {
    id: 11,
    name: 'Naked Bike 600',
    type: 'motos',
    price: '$8,999',
    year: '2024',
    model: 'NB-600',
    image: '/img/scooter4.jpeg',
    description: 'Motocicleta naked con motor de 600cc. Perfecta para ciudad y escapadas de fin de semana.'
  },
  {
    id: 12,
    name: 'Retro Scooter 125',
    type: 'scooters',
    price: '$3,299',
    year: '2024',
    model: 'RS-125',
    image: '/img/scooter5.jpeg',
    description: 'Scooter con diseño retro y tecnología moderna. Motor de 125cc ideal para ciudad.'
  }
];

// Initialize Bootstrap components
document.addEventListener('DOMContentLoaded', () => {
  // Initialize modals
  const productModal = new bootstrap.Modal(document.getElementById('productModal'));

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Filter buttons functionality with animation
  const filterButtons = document.querySelectorAll('.btn-filter');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter products with animation
      const container = document.getElementById('products-container');
      container.style.opacity = '0';
      setTimeout(() => {
        displayProducts(filter);
        container.style.opacity = '1';
      }, 300);
    });
  });

  // Display products function
  function displayProducts(filter = 'todos') {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const filteredProducts = filter === 'todos' 
      ? products 
      : products.filter(product => product.type === filter);

    filteredProducts.forEach(product => {
      const productElement = createProductCard(product);
      container.appendChild(productElement);
    });
  }

  // Create product card with enhanced animation
  function createProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.style.opacity = '0';
    div.style.transform = 'translateY(20px)';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <p><strong>Año:</strong> ${product.year}</p>
        <p><strong>Modelo:</strong> ${product.model}</p>
        <button class="btn btn-dark w-100" data-id="${product.id}">Más información</button>
      </div>
    `;

    // Add click event for "Más información" button
    div.querySelector('button').addEventListener('click', () => {
      showProductDetails(product);
    });

    // Animate card appearance
    setTimeout(() => {
      div.style.opacity = '1';
      div.style.transform = 'translateY(0)';
    }, 100);

    return div;
  }

  // Show product details in modal
  function showProductDetails(product) {
    const modalTitle = document.querySelector('#productModal .modal-title');
    const modalBody = document.querySelector('#productModal .modal-body');

    modalTitle.textContent = product.name;
    modalBody.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Año:</strong> ${product.year}</p>
          <p><strong>Modelo:</strong> ${product.model}</p>
          <p>${product.description}</p>
        </div>
      </div>
    `;

    productModal.show();
  }

  // Initial display of all products
  displayProducts();
});