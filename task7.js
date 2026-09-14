// TASK 1 — Fetch Products API

let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        console.log("ALL PRODUCTS");

        products.forEach((product) => {
            console.log("Product Title :", product.title);
            console.log("Price :", product.price);
            console.log("Category :", product.category);
        });

        let productDetails = products.map((product) => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("Title and Price :", productDetails);

        let expensiveProducts = products.filter((product) => {
            return product.price > 100;
        });

        console.log("Products Above $100 :", expensiveProducts);

        let electronicsProduct = products.find((product) => {
            return product.category === "electronics";
        });

        console.log("First Electronics Product :", electronicsProduct);

        let totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("Total Price :", totalPrice);

        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("Highest to Lowest :", sortedProducts);
    })
    .catch((error) => {
        console.log("Error :", error);
    })
    .finally(() => {
        console.log("API operation completed");
    });


// TASK 2 — Product Category Dashboard

fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        function countCategory(categoryName) {
            return products.filter((product) => {
                return product.category === categoryName;
            }).length;
        }

        let totalProducts = products.length;

        let electronicsCount = countCategory("electronics");
        let jeweleryCount = countCategory("jewelery");
        let mensClothingCount = countCategory("men's clothing");
        let womensClothingCount = countCategory("women's clothing");

        let highestPrice = products.reduce((highest, product) => {
            return product.price > highest ? product.price : highest;
        }, 0);

        let lowestPrice = products.reduce((lowest, product) => {
            return product.price < lowest ? product.price : lowest;
        }, products[0].price);

        let totalProductPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        let averagePrice = totalProductPrice / totalProducts;

        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("===== PRODUCT DASHBOARD =====");

        console.log(`Total Products: ${totalProducts}`);
        console.log(`Electronics: ${electronicsCount}`);
        console.log(`Jewelery: ${jeweleryCount}`);
        console.log(`Men's Clothing: ${mensClothingCount}`);
        console.log(`Women's Clothing: ${womensClothingCount}`);
        console.log(`Highest Price: $${highestPrice}`);
        console.log(`Lowest Price: $${lowestPrice}`);
        console.log(`Average Price: $${averagePrice.toFixed(2)}`);

        console.log("Sorted Products :", sortedProducts);
    })
    .catch((error) => {
        console.log("Error :", error);
    });


// TASK 3 — User & Post API

let userApi = "https://jsonplaceholder.typicode.com/users";
let postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(userApi)
    .then((response) => {
        return response.json();
    })
    .then((users) => {

        let userNames = users.map((user) => {
            return user.name;
        });

        console.log("User Names :", userNames);

        let userDetails = users.map((user) => {
            return {
                name: user.name,
                email: user.email
            };
        });

        console.log("User Name and Email :", userDetails);

        let selectedUser = users.find((user) => {
            return user.id === 5;
        });

        console.log("User with ID 5 :", selectedUser);

        let cityUsers = users.filter((user) => {
            return user.address.city === "South Christy";
        });

        console.log("Users from City :", cityUsers);
    })
    .catch((error) => {
        console.log("User API Error :", error);
    });


fetch(postApi)
    .then((response) => {
        return response.json();
    })
    .then((posts) => {

        let userPosts = posts.filter((post) => {
            return post.userId === 1;
        });

        console.log("Posts by User 1 :", userPosts);

        console.log("Number of Posts by User 1 :", userPosts.length);

        let longTitlePost = posts.find((post) => {
            return post.title.length > 50;
        });

        console.log("First Post with Title Above 50 Characters :", longTitlePost);
    })
    .catch((error) => {
        console.log("Post API Error :", error);
    });


// TASK 4 — API + Search

let categoryName = prompt("Enter product category:");
let maximumPrice = Number(prompt("Enter maximum price:"));

fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        let matchingProducts = products.filter((product) => {
            return product.category === categoryName &&
                   product.price <= maximumPrice;
        });

        console.log("Matching Products :", matchingProducts);
    })
    .catch((error) => {
        console.log("Error :", error);
    });


// TASK 5 — API Shopping Cart

fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        console.log("AVAILABLE PRODUCTS");

        products.forEach((product) => {
            console.log(
                "ID:",
                product.id,
                "|",
                product.title,
                "| Price: $",
                product.price
            );
        });

        let firstId = Number(prompt("Enter first product ID:"));
        let secondId = Number(prompt("Enter second product ID:"));

        let cart = products.filter((product) => {
            return product.id === firstId || product.id === secondId;
        });

        console.log("CART");

        cart.forEach((product, index) => {
            console.log(`Product ${index + 1}: ${product.title}`);
            console.log(`Price: $${product.price}`);
        });

        let cartTotal = cart.reduce((total, product) => {
            return total + product.price;
        }, 0);

        let discount = 0;

        if (cartTotal > 200) {
            discount = 20;
        } else if (cartTotal > 100) {
            discount = 10;
        }

        let discountAmount = cartTotal * discount / 100;

        let finalAmount = cartTotal - discountAmount;

        console.log("Total: $" + cartTotal);
        console.log("Discount: " + discount + "%");
        console.log("Final Amount: $" + finalAmount.toFixed(2));
    })
    .catch((error) => {
        console.log("Error :", error);
    });


// TASK 6 — FakeStore Product Report

fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        console.log("PRODUCT REPORT");

        console.log("Total Products:", products.length);


        let productNames = products.map((product) => {
            return product.title;
        });

        console.log("Product Names :", productNames);


        let expensiveProducts = products.filter((product) => {
            return product.price > 100;
        });

        console.log("Products Above $100 :", expensiveProducts);


        let electronicsProduct = products.find((product) => {
            return product.category === "electronics";
        });

        console.log("Electronics Product :", electronicsProduct);


        let totalValue = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("Total Product Value : $" + totalValue.toFixed(2));


        let anyAbove500 = products.some((product) => {
            return product.price > 500;
        });

        console.log("Any Product Above $500 :", anyAbove500);


        let allAbove1 = products.every((product) => {
            return product.price > 1;
        });

        console.log("All Products Above $1 :", allAbove1);


        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("Highest to Lowest :", sortedProducts);

    })
    .catch((error) => {
        console.log("Error fetching products :", error);
    })
    .finally(() => {
        console.log("Report Completed");
    });