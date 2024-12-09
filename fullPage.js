const product_id = new URLSearchParams(window.location.search).get("product_id");

if (!product_id) {
  document.querySelector('h1').innerText = 'Mahsulot tanlanmadi!';
} else {
  document.querySelector('h1').innerText = `Product_id: ${product_id}`;

  axios
    .get(`https://fakestoreapi.com/products/${product_id}`)
    .then((response) => {
      const product = response.data;

      document.getElementById('product-container').innerHTML = `
        <div class="product">
          <a href="/product-details.html?product_id=${product.id}" class="product-link">
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <h4 class="product-title" title="${product.title}">${product.title}</h4>
            <h3 class="product-price">${product.price}$</h3>
          </a>
        </div>
      `;

      const rating = product.rating.rate;
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;

      let starsHTML = '';
      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<img src="./fullStar.png" alt=" " class="star">';
      }
      if (halfStar) {
        starsHTML += '<img src="./star-half.svg" alt=" " class="star">';
      }

      document.getElementById('rating').innerHTML = starsHTML;
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
}
