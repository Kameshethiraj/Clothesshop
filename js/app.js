let products = {
  data: [
    {
      productName: "Premium Watch",
      category: "Watch",
      price: "70",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80",
    },
    {
      productName: "Beige Short Skirt",
      category: "Skirt",
      price: "49",
      image:
        "https://images.unsplash.com/photo-1590861337998-a4cf4036ccb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=405&q=80",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image:
        "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image:
        "https://images.unsplash.com/photo-1663006770163-528e18351299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Skirt",
      price: "89",
      image:
        "https://plus.unsplash.com/premium_photo-1671117131083-33d33ae6cbc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Skirt",
      price: "49",
      image:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      productName: "Black T-Shirt",
      category: "Topwear",
      price: "36",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      productName: "CA Short Skirt",
      category: "Skirt",
      price: "49",
      image:
        "https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      productName: "Classic Smart Watch",
      category: "Watch",
      price: "70",
      image:
        "https://plus.unsplash.com/premium_photo-1681822419697-50bf30a8c64e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      productName: "Knitted Short Top",
      category: "Topwear",
      price: "29",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    },
  ],
};

for (let i of products.data) {
  //   console.log(i);

  //Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide"); // it hides all untill we clicks the button

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  card.innerHTML = `
      <div class="image-container"><img src="${i.image}"></div>
      <div><i class='bx bx-heart' id="heart-icon" ></i></div>
      <div class="container">
           <div>
              <h5 class="product-name">${i.productName.toUpperCase()}</h5>
              <h6>Rs. ${i.price}</h6>
          </div>
          <button class="cart-btn">Add to Cart</button>
      </div>
      `;

  card.appendChild(container); // appends the container to card
  document.getElementById("products").appendChild(card); // it appends every card to prodicts id div in html
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");

  //loop through all cards  and show the card whenever we clicks the button means it shows related products
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// when search items in search bar we can get results
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-items").value; // search input
  let elements = document.querySelectorAll(".product-name"); //products name eg: skirt,jacket
  let card = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    // Corrected syntax here

    // it follows loops if card variable above we mentioned has 10 .....loops through 0,1,2....9
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // it means any single word we entered in input is related to product name we mentioned
      // products name is in caps so if we enter "t" it changes into caps "T"
      // then it searches "T" in any element like "T" presents un "WATCH " "JACKET" so it shows all
      card[index].classList.remove("hide");
    } else {
      card[index].classList.add("hide");
    }
  });
});

// when we realod the page all products will be shown
window.onload = () => {
  filterProduct("all");
};

//heart btn changes inti red color when we click it
let heartBtns = document.querySelectorAll("#heart-icon");
heartBtns.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("bxs-heart");
  });
});
