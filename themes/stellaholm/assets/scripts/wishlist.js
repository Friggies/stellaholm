const wishlistButton = document.querySelector('#wishlistButton');
const productId = document
    .querySelector('#buyButton')
    .getAttribute('data-item-id');

function getWishlist() {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

const wishlist = getWishlist();
if (wishlist.includes(productId)) {
    wishlistButton.querySelector('img').setAttribute('src', '/icons/heart.svg');
}

wishlistButton.addEventListener('click', () => {
    let wishlist = getWishlist();
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        wishlistButton
            .querySelector('img')
            .setAttribute('src', '/icons/heart-outline.svg');
    } else {
        wishlist.push(productId);
        wishlistButton
            .querySelector('img')
            .setAttribute('src', '/icons/heart.svg');
    }

    saveWishlist(wishlist);
});
