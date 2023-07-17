//Select HTML items
const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');


navBarEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        //Close mobile menu
        mobileMenu.classList.add('inactive');       
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    //close  shoppingCartContainer
    shoppingCartContainer.classList.toggle('inactive');
    
}

function populateProduct(productsArray){ 
    for (product of productsArray) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');    
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    
    
    }
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');


}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];
function itemAdder(argName, argPrice, argImageURL) {
    productList.push({
        name: argName,
        price: argPrice,
        image: argImageURL
    })
    }

itemAdder('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
itemAdder('Laptop', 1000, 'https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg');
itemAdder('TV', 1500, 'https://www.sony.com.co/image/d4f672c8c1b08401c3fb67cce747b7db?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320');
itemAdder('Mouse', 15, 'https://liquimarcas.co/wp-content/uploads/2021/05/mouse-gamer-usb-havit-ms1018-1.jpg');
itemAdder('Keyboard', 100, 'https://panamericana.vtexassets.com/arquivos/ids/379780/teclado-gaming-havit-retroiluminado-kb500l-1-6939119030117.jpg?v=637479943182670000');




// productList.push({
//     name: 'Bike',
//     price: 120,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })
// productList.push({
//     name: 'Screen',
//     price: 1200,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })
// productList.push({
//     name: 'Laptop',
//     price: 1500,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })
// productList.push({
//     name: 'Laptop',
//     price: 1500,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })

{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>  */}


populateProduct(productList);