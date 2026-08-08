const products = [

    {
        id: 1,
        name: "iPhone 15",
        category: "Mobile",
        price: 69999,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
        description: "Apple iPhone with powerful performance"
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Mobile",
        price: 74999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        description: "Samsung flagship smartphone"
    },

    {
        id: 3,
        name: "OnePlus 12",
        category: "Mobile",
        price: 59999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        description: "Fast and powerful Android phone"
    },

    {
        id: 4,
        name: "Google Pixel 8",
        category: "Mobile",
        price: 65999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        description: "Google Pixel smartphone"
    },

    {
        id: 5,
        name: "Xiaomi 14",
        category: "Mobile",
        price: 49999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        description: "Premium Xiaomi smartphone"
    },

    {
        id: 6,
        name: "MacBook Air M2",
        category: "Laptop",
        price: 99999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        description: "Apple MacBook Air with M2 chip"
    },

    {
        id: 7,
        name: "Dell Inspiron 15",
        category: "Laptop",
        price: 64999,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500",
        description: "Dell performance laptop"
    },

    {
        id: 8,
        name: "HP Pavilion",
        category: "Laptop",
        price: 57999,
        image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500",
        description: "HP Pavilion everyday laptop"
    },

    {
        id: 9,
        name: "Lenovo IdeaPad",
        category: "Laptop",
        price: 52999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        description: "Lenovo IdeaPad laptop"
    },

    {
        id: 10,
        name: "Asus VivoBook",
        category: "Laptop",
        price: 61999,
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500",
        description: "Asus VivoBook powerful laptop"
    },

    {
        id: 11,
        name: "Sony WH-1000XM5",
        category: "Headphone",
        price: 29999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        description: "Premium noise cancelling headphones"
    },

    {
        id: 12,
        name: "Apple AirPods Max",
        category: "Headphone",
        price: 59999,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
        description: "Apple premium headphones"
    },

    {
        id: 13,
        name: "JBL Tune 760NC",
        category: "Headphone",
        price: 7999,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
        description: "JBL wireless headphones"
    },

    {
        id: 14,
        name: "Boat Rockerz 450",
        category: "Headphone",
        price: 1499,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
        description: "Affordable wireless headphones"
    },

    {
        id: 15,
        name: "Sennheiser HD 450",
        category: "Headphone",
        price: 12999,
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500",
        description: "High quality audio headphones"
    },

    {
        id: 16,
        name: "Nike Air Max",
        category: "Shoes",
        price: 8999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Nike stylish running shoes"
    },

    {
        id: 17,
        name: "Adidas Ultraboost",
        category: "Shoes",
        price: 10999,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        description: "Comfortable Adidas running shoes"
    },

    {
        id: 18,
        name: "Puma Running Shoes",
        category: "Shoes",
        price: 5999,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
        description: "Puma sports running shoes"
    },

    {
        id: 19,
        name: "Reebok Classic",
        category: "Shoes",
        price: 4499,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500",
        description: "Classic Reebok sneakers"
    },

    {
        id: 20,
        name: "New Balance 574",
        category: "Shoes",
        price: 7499,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        description: "New Balance casual shoes"
    },

    {
        id: 21,
        name: "Apple Watch Series 9",
        category: "Watch",
        price: 41999,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500",
        description: "Apple smart watch"
    },

    {
        id: 22,
        name: "Samsung Galaxy Watch",
        category: "Watch",
        price: 29999,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
        description: "Samsung Galaxy smartwatch"
    },

    {
        id: 23,
        name: "Noise ColorFit",
        category: "Watch",
        price: 3999,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
        description: "Affordable smart watch"
    },

    {
        id: 24,
        name: "Fire-Boltt Phoenix",
        category: "Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        description: "Stylish Fire-Boltt smartwatch"
    },

    {
        id: 25,
        name: "Fastrack Smart Watch",
        category: "Watch",
        price: 4999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
        description: "Fastrack smart watch"
    }

];

let cart = [];

let currentCategory = "All";

function displayProducts(productList) {

    const container =
        document.getElementById("productContainer");

    container.innerHTML = "";


    if (productList.length === 0) {

        container.innerHTML = `
            <div class="no-product">
                ❌ No Product Found
            </div>
        `;

        return;
    }


    productList.forEach(function (product) {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
                onerror="this.src='https://via.placeholder.com/500x400?text=Product+Image'"
            >

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-description">
                    ${product.description}
                </div>

                <div class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})">

                    🛒 Add to Cart

                </button>

            </div>
        `;


        container.appendChild(card);

    });

}

function addToCart(productId) {

    const product =
        products.find(function (item) {

            return item.id === productId;

        });


    if (!product) {

        return;

    }


    cart.push(product);


    updateCartCount();


    alert(
        product.name + " Cart me add ho gaya 🛒"
    );

}

function updateCartCount() {

    document.getElementById("cartCount").textContent =
        cart.length;

}

function showCart() {

    document.getElementById("cartModal").style.display =
        "flex";

    displayCart();

}

function closeCart() {

    document.getElementById("cartModal").style.display =
        "none";

}

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";


    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p style="
                text-align:center;
                padding:25px;
            ">

                🛒 Your Cart is Empty

            </p>

        `;

        cartTotal.textContent = "0";

        return;
    }


    cart.forEach(function (product, index) {

        total += product.price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item-info">

                    <h4>
                        ${product.name}
                    </h4>

                    <p>
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    cartTotal.textContent =
        total.toLocaleString("en-IN");

}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    displayCart();

}

function filterProducts(category) {

    currentCategory = category;

    applySearchAndSort();

}

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        applySearchAndSort();

    });

document
    .getElementById("sortPrice")
    .addEventListener("change", function () {

        applySearchAndSort();

    });

function applySearchAndSort() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    let filteredProducts =
        products.filter(function (product) {


            const categoryMatch =
                currentCategory === "All" ||
                product.category === currentCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchText) ||

                product.category
                    .toLowerCase()
                    .includes(searchText);


            return categoryMatch && searchMatch;

        });


    const sortValue =
        document.getElementById("sortPrice").value;


    if (sortValue === "low") {

        filteredProducts.sort(function (a, b) {

            return a.price - b.price;

        });

    }

    if (sortValue === "high") {

        filteredProducts.sort(function (a, b) {

            return b.price - a.price;

        });

    }


    displayProducts(filteredProducts);

}

function checkout() {

    if (cart.length === 0) {
        alert("Cart empty hai 🛒");
        return;
    }
    alert("🎉 Order Successfully Placed!");
    cart = [];
    updateCartCount();
    displayCart();

}

displayProducts(products);