function getProducts() {
    return fetch('demo/data/products.json', {method: 'GET'}).then(res => res.json()).then(d => d.data);
}

export {getProducts};