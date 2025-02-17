function getFullPrice(price, percentage){
    const perc = 100 - percentage;
    const result = (price * 100) / perc;
    return result;
}

function getDiscountPrice(price, percentage){
    const discount = (percentage / 100) * price;
    const result = price - discount;
    return result;
}

async function fetchData(dataUrl){
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error(`Erro ao carregar JSON: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

function getStarRating(element) {
    const firstP = element.querySelector("p");
    if (firstP) {
        const rating = parseFloat(firstP.textContent.trim(), 10);
        if (!isNaN(rating)) {
            let ratingObj = {
                element,
                value: rating
            }
            insertStarRating(ratingObj);
        }
    }
}

function insertStarRating(obj){
    const {element, value} = obj
    const textP = element.querySelector("p");
    if (textP) {
        textP.remove();
    }
    
    for (let i = 0; i < Math.floor(value); i++) {
        const starImg = document.createElement("img");
        starImg.src = "images/reviews/starFull.svg";
        starImg.alt = "Star";
        starImg.classList.add("star-icon");
        element.appendChild(starImg);
    }
    if(isDecimal(value)){
        const starImg = document.createElement("img");
        starImg.src = "images/reviews/starPart.svg";
        starImg.alt = "Half star";
        starImg.classList.add("star-icon");
        starImg.classList.add("starPart-icon");
        element.appendChild(starImg);
    }
}
function isDecimal(num) {
    return !Number.isInteger(num);
}

