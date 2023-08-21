let total = 0;

function handleClick(element) {
  var parentDiv = element;
  
  var productNameNode = parentDiv.querySelector('.text-gray-800');
  var productName = productNameNode.textContent;

  const selectedItemContainer = document.getElementById("selected-items");
  const li = document.createElement("li");
  li.innerText = productName;
  selectedItemContainer.appendChild(li);

  var priceNode = parentDiv.querySelector('.text-gray-600');
  var priceText = priceNode.textContent;
  var price = parseFloat(priceText.substring(1));

  total = total + price;

  const totalPriceContainer = document.getElementById("total");
  totalPriceContainer.innerText = '$' + total.toFixed(2);
}

var productDiv = document.querySelector('.p-4');
productDiv.addEventListener('click', function(event) {
  if (event.target === this) {
    handleClick(this);
  }
});

document.getElementById("coupon").addEventListener("input", function() {
  var discountButton = document.getElementById("btn-apply-coupon");
  var couponCode = this.value;
  if (couponCode === "SELL200") {
    discountButton.disabled = false;
  } else {
    discountButton.disabled = true;
  }
});

document.getElementById("btn-apply-coupon").addEventListener("click", function() {
  var couponCode = document.getElementById("coupon").value;
  if (couponCode === "SELL200") {
    discountPrice();
  }
});

function discountPrice() {
  var discountPercentage = 0.2; // 20% discount
  var totalPriceContainer = document.getElementById("total");
  var discountPriceContainer = document.getElementById("discount-price");
  
  var discountedTotal = total * (1 - discountPercentage);
  
  discountPriceContainer.innerText = '$' + discountedTotal.toFixed(2);
}

document.getElementById("btn-checkout").addEventListener("click", function() {
  var selectedItemContainer = document.getElementById("selected-items");
  var selectedItems = selectedItemContainer.querySelectorAll("li");

  if (selectedItems.length === 0) {
    alert("Add products to the cart before checking out!");
  } else {
    // Open the modal
    document.getElementById("my_modal_6").checked = true;
  }
});

// Close modal when "Close" button is clicked
document.querySelector(".modal-action label").addEventListener("click", function() {
  document.getElementById("my_modal_6").checked = false;
});
