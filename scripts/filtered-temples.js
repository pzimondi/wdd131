// filtered-temples.js

// Array of Temple Objects (with 3 additions)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21", // Old (before 1900)
    area: 74792, // Small
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7", // New (after 2000)
    area: 96630, // Large (larger than 90,000 sq ft)
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2", // New (after 2000)
    area: 6861, // Small (smaller than 10,000 sq ft)
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558, // Large (larger than 90,000 sq ft)
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600, // Small (smaller than 10,000 sq ft)
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642, // Large (larger than 90,000 sq ft)
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6", // Old (before 1900)
    area: 253000, // Large (larger than 90,000 sq ft)
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-city-temple-23000-wallpaper.jpg"
  },
  {
    templeName: "London England",
    location: "Newchapel, England",
    dedicated: "1958, September, 7",
    area: 42776, // Small
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-28681-wallpaper.jpg"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29", // New (after 2000)
    area: 22283, // Small
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-mormon-931604-wallpaper.jpg"
  },
];

const gallery = document.querySelector(".gallery");

/**
 * Creates and displays temple cards in the gallery section.
 * @param {Array<Object>} filteredTemples - Array of temple objects to display.
 */
function createTempleCards(filteredTemples) {
  // Clear existing content
  gallery.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    // 1. Create the <figure> element
    let figure = document.createElement("figure");

    // 2. Create the <img> element
    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // Native lazy loading

    // 3. Create the <figcaption> element
    let figcaption = document.createElement("figcaption");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`; // Format area

    // 4. Append elements to figcaption
    figcaption.appendChild(name);
    figcaption.appendChild(location);
    figcaption.appendChild(dedicated);
    figcaption.appendChild(area);

    // 5. Append img and figcaption to figure
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // 6. Append figure to the gallery section
    gallery.appendChild(figure);
  });
}

/**
 * Filters the main temple array based on the given filter type.
 * @param {string} filter - The type of filter to apply ('old', 'new', 'large', 'small', 'home').
 */
function filterTemples(filter) {
  let filteredTemples = [];
  const galleryTitle = document.getElementById("galleryTitle");

  switch (filter) {
    case 'old':
      // Temples built before 1900
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
      });
      galleryTitle.textContent = "Old Temples (Dedicated before 1900)";
      break;

    case 'new':
      // Temples built after 2000
      filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
      });
      galleryTitle.textContent = "New Temples (Dedicated after 2000)";
      break;

    case 'large':
      // Temples larger than 90,000 square feet
      filteredTemples = temples.filter(temple => temple.area > 90000);
      galleryTitle.textContent = "Large Temples (Area > 90,000 sq ft)";
      break;

    case 'small':
      // Temples smaller than 10,000 square feet
      filteredTemples = temples.filter(temple => temple.area < 10000);
      galleryTitle.textContent = "Small Temples (Area < 10,000 sq ft)";
      break;

    case 'home':
    default:
      // Displays all temples
      filteredTemples = temples;
      galleryTitle.textContent = "All Temples";
      break;
  }

  createTempleCards(filteredTemples);
}


document.addEventListener("DOMContentLoaded", () => {
  // Dynamic year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Last modified
  document.getElementById("lastModified").textContent = document.lastModified;

  // Initial load: Display all temples (Home view)
  filterTemples('home');

  // Menu toggle (from original temples.js)
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", () => {
    // Toggle between 'none' and 'flex' (or 'block') for better CSS control
    const isFlex = navLinks.style.display === "flex";
    const isBlock = navLinks.style.display === "block";
    
    if (isFlex || isBlock) {
      navLinks.style.display = "none";
      menuBtn.textContent = "☰";
    } else {
      // Use 'block' for mobile display per original script logic
      navLinks.style.display = "block"; 
      menuBtn.textContent = "✖";
    }
  });

  // Reset nav when resizing (from original temples.js)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinks.style.display = "flex";
    } else {
      // Only hide if the menu button is NOT the '✖' (open) state
      if (menuBtn.textContent === "☰") {
        navLinks.style.display = "none";
      }
    }
  });


  // Navigation event listeners for filtering
  const navLinksContainer = document.getElementById("navLinks");
  navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute('data-filter');
      if (filter) {
        filterTemples(filter);
      }
    });
  });
});