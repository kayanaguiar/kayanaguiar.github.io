const classes = {
    productCard: 'productCard',
    imgContainer: {
        container: 'img-container'
    },
    details: {
        container: 'details',
        title: 'title',
        rating: {
            wrapper: 'rating',
            stars: 'starRate'
        },
        priceContainer: 'priceContainer',
        price: 'price' ,
        discount: 'discount',
        percentage: 'percentage'
    }
}

async function insertData(element, data){

    data.forEach(item => {
        const {title, price, image, discount, rating, percentage} = item;

        const productCard = document.createElement('article');
        productCard.classList.add(classes.productCard);

        const imgContainer = document.createElement('div');
        imgContainer.classList.add(classes.imgContainer.container);

        const img = document.createElement('img');
        img.src = image;
        img.alt = title;
        imgContainer.appendChild(img);

        const details = document.createElement('div');
        details.classList.add(classes.details.container);

        const titleElement = document.createElement('h3');
        titleElement.classList.add(classes.details.title);
        titleElement.textContent = title;

        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add(classes.details.rating.wrapper);

        const starRate = document.createElement('div');
        starRate.classList.add(classes.details.rating.stars);

        const starValue = document.createElement('p');
        starValue.textContent = rating.rate;
        starRate.appendChild(starValue);

        const ratingText = document.createElement('p');
        ratingText.textContent = `${rating.rate}/${rating.total}`;

        ratingContainer.appendChild(starRate);
        ratingContainer.appendChild(ratingText);
        

        const priceContainer = document.createElement('div');
        priceContainer.classList.add('priceContainer');

        const priceElement = document.createElement('p');
        priceElement.classList.add('price');
        priceElement.textContent =  `$${parseInt(getDiscountPrice(price, discount))}`;
        priceContainer.appendChild(priceElement);

        if(discount != 0){
            const discountElement = document.createElement('p');
            discountElement.classList.add(classes.details.discount);
            discountElement.textContent = `$${price}`;

            const percentageElement = document.createElement('div');
            percentageElement.classList.add(classes.details.percentage);
            
            const percentageText = document.createElement('p');
            percentageText.textContent = `-${discount}%`;
            percentageElement.appendChild(percentageText);

            priceContainer.appendChild(discountElement);
            priceContainer.appendChild(percentageElement);
        }
        
        // Adicionar ao card
        details.appendChild(titleElement);
        details.appendChild(ratingContainer);
        details.appendChild(priceContainer);

        productCard.appendChild(imgContainer);
        productCard.appendChild(details);

        element.appendChild(productCard);
        getStarRating(starRate);
    });
    
}


