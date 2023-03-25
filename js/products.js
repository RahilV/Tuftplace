fetch('/js/products.json')
    .then(response => response.json())
    .then(data => {
        // Get the product container element
        const productContainer = document.getElementById('product-container');
        // Loop through the products and create HTML elements for each one
        data.products.forEach(product => {
            // Create a div element to hold the product
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-xl-3');
            productDiv.classList.add('col-md-4');
            productDiv.classList.add('col-xs-6');
            productDiv.classList.add('items');
            productDiv.classList.add('graphic');
            productDiv.classList.add('fadeInUp');

            //image div
            const prodimgdiv = document.createElement('div');
            prodimgdiv.classList.add('item-img');

            productDiv.appendChild(prodimgdiv);

            //link
            const prodimg = document.createElement('a');
            prodimg.href = product.link;
            prodimg.classList.add('imago');
            prodimg.classList.add('wow');

            prodimgdiv.appendChild(prodimg);

            //image
            const img = document.createElement('img');
            img.src = product.image;

            //image overlay
            const overlay = document.createElement('div');
            overlay.classList.add('item-img-overlay');

            prodimg.appendChild(img);
            prodimg.appendChild(overlay);
            prodimg.loading = 'lazy';


            //image details
            const cont = document.createElement('div');
            cont.classList.add('cont');

            productDiv.appendChild(cont);

            //title
            const title = document.createElement('h6');
            title.innerHTML = product.name;

            cont.appendChild(title);

            //span (size)
            const size = document.createElement('span');
            size.classList.add('tags');
            size.innerHTML = product.size;

            cont.appendChild(size);

            //inr
            const inr_price = document.createElement('p');
            inr_price.classList.add('inr');
            inr_price.innerHTML = "₹ " + product.inr;

            cont.appendChild(inr_price);

            //usd
            const usd_price = document.createElement('p');
            usd_price.classList.add('usd');
            usd_price.innerHTML = "$ " + product.usd;

            cont.appendChild(usd_price);

            // Add the product div to the product container
            productContainer.appendChild(productDiv);
        });
    });