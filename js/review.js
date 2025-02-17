async function insertReview(elementId, dataUrl){
    const reviewClasses = {
        card: "reviewCard",
        rating: "starRate",
        userContainer: "user",
        user: "userName",
        check: {
            url: "images/reviews/check.svg",
            alt: 'checkmark'
        },
        review: "review"
    }
    const data = await fetchData(dataUrl);
    const element = document.getElementById(elementId);

    data.forEach(item => {
        const {user, review, rating} = item

        const reviewCard = document.createElement('article');
        reviewCard.classList.add(reviewClasses.card);

        const rateElement = document.createElement('div');
        rateElement.classList.add(reviewClasses.rating)
        
        const rateText = document.createElement('p');
        rateElement.appendChild(rateText);
        rateText.textContent = rating.rate;

        const userContainer = document.createElement('div');
        userContainer.classList.add(reviewClasses.userContainer);

        const userElement = document.createElement('p');
        userElement.classList.add(reviewClasses.user);
        userElement.textContent = user;

        const checkElement = document.createElement('img');
        checkElement.setAttribute('src', reviewClasses.check.url);
        checkElement.setAttribute('alt', reviewClasses.check.alt);

        userContainer.appendChild(userElement);
        userContainer.appendChild(checkElement);

        const reviewElement = document.createElement('p');
        reviewElement.classList.add(reviewClasses.review);
        reviewElement.textContent = review;

        reviewCard.appendChild(rateElement);
        reviewCard.appendChild(userContainer);
        reviewCard.appendChild(reviewElement);

        element.appendChild(reviewCard);
        getStarRating(rateElement);
    });
}


function moveSlide(direction, windowMobile) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.reviewCard');
    const totalSlides = slides.length;
  
    currentIndex += direction;
  
    if (currentIndex < 0) {
      currentIndex = totalSlides - visibleSlides;
    } else if (currentIndex > totalSlides - visibleSlides) {
      currentIndex = 0;
    }
  
    const slideWidth = slides[0].offsetWidth;
    const offset = -(currentIndex * slideWidth);
    
    document.querySelector('.reviewList').style.transform = `translateX(${offset}px)`;
}

const reviewContainer = document.getElementById("reviewList");

document.getElementById("next").addEventListener('click', () => {
    const {cardWidth, gapBetweenCards, totalCardWidth} = getReviewValues();

    if (reviewContainer.scrollLeft + reviewContainer.offsetWidth >= reviewContainer.scrollWidth) {
        reviewContainer.scrollLeft = 0;
    } else {
        reviewContainer.scrollLeft += totalCardWidth;
    }
})
document.getElementById("prev").addEventListener('click', () => {
    const {cardWidth, gapBetweenCards, totalCardWidth} = getReviewValues();
    
    if (reviewContainer.scrollLeft === 0) {
        reviewContainer.scrollLeft = reviewContainer.scrollWidth;
    } else {
        reviewContainer.scrollLeft -= totalCardWidth;
    }
})

function getReviewValues(){
    const firstCard = reviewContainer.querySelector('.reviewCard'); 
    let cardWidth = firstCard.offsetWidth; 
    let computedStyles = window.getComputedStyle(firstCard);
    let gapBetweenCards = parseInt(computedStyles.gap);

    let totalCardWidth = cardWidth + (2 * gapBetweenCards)  ;

    return {
        cardWidth,
        gapBetweenCards,
        totalCardWidth
    }
}
