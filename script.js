
// button.addEventListener('click', () => {
//     const breed = tanlash.value.toLowerCase();
//     const link = `https://dog.ceo/api/breed/${breed}/images/random`;

//     axios
//         .get(link)
//         .then((response) => {
//             console.log(response.data);

//             kottaDiv.innerHTML = `<img src="${response.data.message}" alt="${breed}" style="max-width:400px; border-radius: 8px;">`;
//         })
//         .catch((error) => {
//             console.error(error);
//             kottaDiv.innerText = 'Xatolik yuz berdi!';
//         });
// });


// const tanlash = document.getElementById('dogs');
// const button = document.getElementById('before');
// const kottaDiv = document.getElementById('kotta');



const locationPage = (product_id)=>{
    window.location.href=`./fullPage.html?product_id=${product_id}`

}

const otaDiv = document.getElementById('otaDiv');
axios
    .get('https://fakestoreapi.com/products/')
    .then((response) => {
        response.data.forEach((product) => {
            const productCard = `
        <div class="product-card" onclick="locationPage(${product.id})">
          <img src="${product.image}" alt="${product.title}">
            <h4 title="${product.title}">${product.title.length < 25
                    ? product.title
                    : product.title.slice(0, 24) + "..."
                }</h4>         
                 <div>
            <span>$${product.price}</span>
          </div>
        </div>`;
            otaDiv.innerHTML += productCard;
            console.log(product.image);
        });
    })
    .catch((error) => {
        console.error("Xatolik", error);
    });







