/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
const slider = document.querySelector(".slider")
const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

/** Slider part */
let currentIndex = 0
let autoScrollInterval

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length
  updateSlide()
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length
  updateSlide()
}

function updateSlide() {
  const slideWidth = slides[0].offsetWidth
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`
}

// Arrow buttons event listeners
prevBtn.addEventListener("click", () => {
  prevSlide()
  stopAutoSlide() // Stop auto-scroll when manually navigating
})

nextBtn.addEventListener("click", () => {
  nextSlide()
  stopAutoSlide() // Stop auto-scroll when manually navigating
})

// Automatic slide change
function startAutoSlide() {
  autoScrollInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
}

function stopAutoSlide() {
  clearInterval(autoScrollInterval)
}

// Uncomment the line below to enable automatic slide change
startAutoSlide()

/** Scroll to top part  */
const scrollToTopButton = document.getElementById("scrollToTop")

// Show/hide the scroll-to-top button
function toggleScrollToTopButton() {
  if (window.scrollY >= 500) {
    scrollToTopButton.classList.add("show")
  } else {
    scrollToTopButton.classList.remove("show")
  }
}

// Scroll to the top when clicking on the button
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // Attach event listeners
// scrollToTopButton.addEventListener('click', scrollToTop);
// document.addEventListener('scroll', toggleScrollToTopButton);

// var electronics = document.getElementById("electronics");
// var furniture = document.getElementById("furniture");
// var fashion = document.getElementById("fashion");
// var groceries = document.getElementById("groceries");
// var tabs = [electronics, furniture, fashion, groceries];
// var cardContainer = document.getElementById("row");

// electronics.addEventListener("click", ShowProducts);
// furniture.addEventListener("click", ShowProducts);
// fashion.addEventListener("click", ShowProducts);
// groceries.addEventListener("click", ShowProducts);
// document.addEventListener("DOMContentLoaded", function () { GetProducts(["smartphones", "laptops"]); })

// function ShowProducts(e) {
//     var id = e.target.id;
//     document.getElementsByClassName("active")[1].classList.remove("active");
//     e.target.classList.add("active");
//     switch (id) {
//         case "electronics":
//             GetProducts(["smartphones", "laptops"]);
//             break;
//         case "furniture":
//             GetProducts(["furniture"]);
//             break;
//         case "fashion":
//             GetProducts(["mens-shirts", "mens-shoes", "mens-watches"]);
//             break;
//         case "groceries":
//             GetProducts(["groceries"]);
//             break;
//         default:
//             break;
//     }
// }

// function GetProducts(categories) {
//     cardContainer.innerHTML = "";
//     var productCard;
//     for (let i = 0; i < categories.length; i++) {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", `https://dummyjson.com/products/category/${categories[i]}`);
//         xhr.send("");
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     var response = xhr.response;
//                     var data = JSON.parse(response);
//                     for (let j = 0; j < data.products.length; j++) {
//                         var quantity = 0;
//                         if (hasCookie(`product${data.products[j].id}Quantity`)) {
//                             quantity = getCookie(`product${data.products[j].id}Quantity`);
//                         }
//                         productCard = `<div class="card m-4" style="width: 18rem;">
//                                         <img src="${data.products[j].thumbnail}" class="card-img-top product-img" alt="">
//                                         <div class="card-body">
//                                             <h5 id="card-title" class="card-title">${data.products[j].title}</h5>
//                                             <h5 id="card-description" class="card-title">${data.products[j].description}</h5>
//                                             <p class="card-text">$ ${data.products[j].price}</p>
//                                             <p id="q${data.products[j].id}" class="card-text">Quantity: ${data.products[j].stock - quantity}</p>
//                                             <button id="${data.products[j].id}" class="btn btn-primary" onclick="AddToCart(this)">Add to Cart</button>
//                                         </div>
//                                     </div>`
//                         cardContainer.innerHTML += productCard;
//                     }
//                 } else {
//                     console.log("error");
//                 }
//             }
//         }
//     }

// }
// function getCookie(cookieName) {
//     var start = document.cookie.indexOf(cookieName) + (cookieName.length + 1);
//     var end = document.cookie.indexOf(";", start);
//     if (end == -1)
//         end = document.cookie.length;
//     return document.cookie.slice(start, end);
// }

// function setCookie(cookieName, cookieValue, expiryDate) {
//     if (expiryDate)
//         document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate;
//     else
//         document.cookie = cookieName + "=" + cookieValue;
// }

// function deleteCookie(cookieName) {
//     document.cookie = cookieName + "=abc;expires=" + lastDate;
// }

// function hasCookie(cookieName) {
//     return (document.cookie.includes(cookieName));
// }

// End Product Cards

function addToCart(productId) {
  var product = products.find(p => p.id === productId)

  if (product && product.stock > 0) {
    product.stock--
    var cartItems = document.getElementById("cart-items")
    var cartItem = document.createElement("li")
    cartItem.textContent = `${product.name} - $${product.price}`
    cartItems.appendChild(cartItem)
    renderProducts(product.category) // Re-render product listings
  } else {
    alert("Item out of stock.")
  }
}
var cartSidebar
document.addEventListener("DOMContentLoaded", function () {
  cartSidebar = document.getElementById("cart-sidebar")
  const openCartButton = document.getElementById("open-cart")
  const closeCartButton = document.getElementById("close-cart")
  const closeCartSidebarButton = document.getElementById("close-cart-sidebar") // Add this line
  const clearCartButton = document.getElementById("clear-cart")
  const cartItems = document.querySelector(".cart-items")
  const cartTotal = document.getElementById("cart-total")
  const cart = []
  let cartOpen = false

  // Function to toggle the cart (open or close)
  function toggleCart() {
    if (cartOpen) {
      cartSidebar.classList.remove("cart-open")
    } else {
      cartSidebar.classList.add("cart-open")
    }
    cartOpen = !cartOpen
    favoriteSidebar.classList.remove("favorite-open")
  }

  // Event listener for the cart button (now toggles)
  openCartButton.addEventListener("click", toggleCart)

  // Event listener for the close cart button
  closeCartButton.addEventListener("click", toggleCart)

  // Event listener for the close cart sidebar button (x button)
  closeCartSidebarButton.addEventListener("click", toggleCart) // Add this line

  // openCartButton.addEventListener("click", () => {
  //     cartSidebar.classList.add("cart-open");
  //     // Calculate the height based on the number of items in the cart
  //     const cartHeight = Math.min(cart.length * 50, window.innerHeight * 0.5);
  //     cartSidebar.style.height = `${cartHeight}px`;
  // });

  //     // Function to open the cart
  // openCartButton.addEventListener("click", () => {
  //     cartSidebar.classList.add("cart-open");
  //     // Calculate the height based on the number of items in the cart
  //     const cartHeight = Math.min(cart.length * 50, window.innerHeight * 0.5);
  //     cartSidebar.style.height = `${cartHeight}px`;
  // });

  // // Function to close the cart
  // closeCartButton.addEventListener("click", () => {
  //     cartSidebar.classList.remove("cart-open");
  //     cartSidebar.style.height = "50%"; // Reset the height when closing
  // });

  // Function to add an item to the cart
  function addToCart(product) {
    cart.push(product)
    displayCartItems()
    calculateTotal()
  }

  // Function to display cart items
  function displayCartItems() {
    cartItems.innerHTML = ""
    cart.forEach((product, index) => {
      const cartItem = document.createElement("div")
      cartItem.classList.add("cart-item")
      cartItem.innerHTML = `
                <span>${product.name} - $${product.price}</span>
                <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
            `
      cartItems.appendChild(cartItem)
    })
  }

  // Function to remove an item from the cart
  function removeFromCart(index) {
    cart.splice(index, 1)
    displayCartItems()
    calculateTotal()
  }

  // Function to calculate the total price
  function calculateTotal() {
    const total = cart.reduce((acc, product) => acc + product.price, 0)
    cartTotal.textContent = `$${total.toFixed(2)}`
  }

  // Function to clear the cart
  clearCartButton.addEventListener("click", () => {
    cart.length = 0
    displayCartItems()
    calculateTotal()
  })
})
var favoriteSidebar
document.addEventListener("DOMContentLoaded", function () {
  favoriteSidebar = document.getElementById("favorite-sidebar")
  const openfavoriteButton = document.getElementById("open-favorite")
  const closefavoriteButton = document.getElementById("close-favorite")
  const closefavoriteSidebarButton = document.getElementById(
    "close-favorite-sidebar"
  ) // Add this line
  const clearfavoriteButton = document.getElementById("clear-favorite")
  const favoriteItems = document.querySelector(".favorite-items")
  const favoriteTotal = document.getElementById("favorite-total")
  const favorite = []
  let favoriteOpen = false

  // Function to toggle the favorite (open or close)
  function togglefavorite() {
    if (favoriteOpen) {
      favoriteSidebar.classList.remove("favorite-open")
    } else {
      favoriteSidebar.classList.add("favorite-open")
    }
    favoriteOpen = !favoriteOpen
    cartSidebar.classList.remove("cart-open")
  }

  // Event listener for the favorite button (now toggles)
  openfavoriteButton.addEventListener("click", togglefavorite)

  // Event listener for the close favorite button
  closefavoriteButton.addEventListener("click", togglefavorite)

  // Event listener for the close favorite sidebar button (x button)
  closefavoriteSidebarButton.addEventListener("click", togglefavorite) // Add this line
})

// Example of how to add a product to the cart when the "Add to Cart" button is clicked
const addToCartButtons = document.querySelectorAll(".add-to-cart-button")
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Replace with your logic to get product details
    const product = {
      name: "Product Name",
      price: 10.99, // Replace with the actual price
    }
    addToCart(product)
  })
})

//StyleOne
const favoriteIcons = document.querySelectorAll(".toggle-favorite")

favoriteIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("fas")
  })
})

function updateStarRating() {
  const productRatingElements = document.querySelectorAll(".product-rating")

  productRatingElements.forEach(ratingElement => {
    const ratingText = ratingElement.textContent.trim().split(" ")[0]
    const rating = parseFloat(ratingText)

    const starsElement = ratingElement.querySelector(".stars")
    starsElement.innerHTML = ""

    for (let i = 1; i <= rating; i++) {
      const starIcon = document.createElement("i")
      starIcon.classList.add("fas", "fa-star")
      starsElement.appendChild(starIcon)
    }

    if (rating % 1 == 0.5) {
      const halfStarIcon = document.createElement("i")
      halfStarIcon.classList.add("fas", "fa-star-half-alt")
      starsElement.appendChild(halfStarIcon)
    }

    const emptyStarsCount = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStarsCount; i++) {
      const starIcon = document.createElement("i")
      starIcon.classList.add("far", "fa-star")
      starsElement.appendChild(starIcon)
    }
  })
}

updateStarRating()