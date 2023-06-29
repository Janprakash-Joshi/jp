const items = [
    { id: 1, name: "pan pizza (veg)", price: 500, img:"/img/pan veg.jpg" },
    { id: 2, name: "pan pizza (non-veg)", price: 700  ,img:"/img/pan nonveg.jpg"},
    { id: 3, name: "cheesy Max Pizza (veg)", price: 600 ,img:"/img/cheese veg.jpg"},
    { id: 3, name: "cheesy Max Pizza (non-veg)", price: 1000 ,img:"/img/cheese nonveg.jpg"}
  ];

  // Cart data
  const cart = [];

  // Function to render cart items
  function renderCartItems() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    cart.forEach(item => {
      const cartItemElement = document.createElement("div");
      cartItemElement.className = "cart-item";

      const itemImageElement = document.createElement("img");
      itemImageElement.src = item.img; 
      cartItemElement.appendChild(itemImageElement);

      const itemNameElement = document.createElement("span");
      itemNameElement.innerText = item.name;
      cartItemElement.appendChild(itemNameElement);

      const itemPriceElement = document.createElement("span");
      itemPriceElement.classList.add('price');
      itemPriceElement.innerText = item.price;
      cartItemElement.appendChild(itemPriceElement);

      const quantityElement = document.createElement("div");
      quantityElement.className = "quantity";

      const decreaseButton = document.createElement("button");
      decreaseButton.innerText = "-";
      decreaseButton.addEventListener("click", () => decreaseQuantity(item));
      quantityElement.appendChild(decreaseButton);

      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min=0;
      quantityInput.value = item.quantity;
      quantityInput.addEventListener("input", (event) => updateQuantity(item, event.target.value));
      quantityElement.appendChild(quantityInput);

      const increaseButton = document.createElement("button");
      increaseButton.innerText = "+";
      increaseButton.addEventListener("click", () => increaseQuantity(item));
      quantityElement.appendChild(increaseButton);

      cartItemElement.appendChild(quantityElement);

      cartItemsElement.appendChild(cartItemElement);
    });
  }

  // Function to increase item quantity
  function increaseQuantity(item) {
    item.quantity++;
    renderCartItems();
    totalAmount();
  }

  // Function to decrease item quantity
  function decreaseQuantity(item) {
    if (item.quantity > 0) {
      item.quantity--;
      renderCartItems();
    }
    totalAmount();
  }

  // Function to update item quantity
  function updateQuantity(item, quantity) {
    item.quantity = parseInt(quantity);
    renderCartItems();
  }

  // Function to handle checkout
  function checkout() {
    totalAmount();
    console.log("Proceeding to checkout...");
  }

  // Add sample items to cart
  items.forEach(item => {
    item.quantity = 0; 
    cart.push(item);
  });

  // Initial rendering
  renderCartItems();
 
  //total amount
  const elementTotalAmount=document.getElementById('totalAmount');
  function totalAmount(){
    var totalAmount=0;
    items.forEach(item => {
        totalAmount=(item.quantity*item.price)+totalAmount;
    });

    elementTotalAmount.innerText=totalAmount;
  }