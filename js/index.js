const dataUrl = {
    newProducts: 'data/products.json',
    topProducts: 'data/topProducts.json'
}

const newArrivalsPL = document.getElementById('newArrivals');
const topSellingPL = document.getElementById('topSelling');

async function initialize() {
    loadProducts(newArrivalsPL, dataUrl.newProducts);
    loadProducts(topSellingPL, dataUrl.topProducts);
    await insertReview('reviewList', "data/reviews.json");
}

async function loadProducts(element, path){
    const data = await fetchData(path);
    const products = data.slice(0, 4);
    await insertData(element, products);
}

async function viewMoreProducts(element, btnId) {
    let path = btnId == "topProducts" ? dataUrl.topProducts : dataUrl.newProducts;
    const data = await fetchData(path);

    const qtdProducts = element.childElementCount;
    const products = data.slice(qtdProducts,( qtdProducts + 4));
    if(products.length !== 0 ){
        await insertData(element, products);
        document.getElementById(btnId).remove();
    }
}
//Close sign in top message
document.getElementById("signMsgBtn").addEventListener("click", function() {
    document.getElementById("signMsg").remove();
});

//Menu hamburguer button
document.getElementById("menuButton").addEventListener("click", function(){
    let checkbox = document.getElementById("menuCheckbox");
    checkbox.checked = !checkbox.checked;
})

//View more button
document.querySelectorAll(".productListBtn").forEach(button => {
    button.addEventListener("click", function(event){
        const element = this.parentElement.querySelector(".productList");
        const btnId = event.target.id;
        viewMoreProducts(element, btnId);
    })
})

initialize();
