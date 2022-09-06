const textBox = document.querySelector(".text-content");
const buttonProduct = document.querySelector(".btn-product");
const buttonDetails = document.querySelector(".btn-details");
const buttonReviews = document.querySelector(".btn-reviews");

const productText = `
<p>
Description:
</p>
<p>
Sweet almond oil nourishes and provides a wonderful fragrance.
13 care ingredients such as Aloe vera, chamomile and panthenol nourish the coat and make it
supple.
Oatmeal spray conditioner remaining in the coa
</p>`;

const detailsText = `<p>
Details:
</p>
<br>
<p>
For all pets of world
</p>
<br>
<p>Is best product </p>
<br>
<p>12 units </p>
<br>
<p>
420ml
</p>`;
const reviwesText = `
<div class="review">
<div class="user">
    <div class="avatar">
        <img src="../assets/imgs/icon.png" width="20px">
    </div>
    <p>User</p>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sequi, maiores provident
    sunt
    aut amet ea similique veniam laudantium molestiae !</p>
</div>
<div class="review">
<div class="user">
    <div class="avatar">
        <img src="../assets/imgs/icon.png" width="20px" alt="avatar">
    </div>
    <p>User</p>
</div>
<p>Wiskas sache is better!!</p>
</div>`;

buttonProduct.addEventListener("click", () => {
  textBox.innerHTML = productText;
});
buttonDetails.addEventListener("click", () => {
  textBox.innerHTML = detailsText;
});
buttonReviews.addEventListener("click", () => {
  textBox.innerHTML = reviwesText;
});

textBox.innerHTML = productText;
