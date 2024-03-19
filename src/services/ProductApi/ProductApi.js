import axios from 'axios';

const DataTotalSale = () => {
    return axios.get("http://localhost:8080/api/v1/products/get_all");
};

const createProduct = (name, description, price_sale, quantity, size,
    color, status, discount, category_id, brand_id, tags_product_id, productImages) => {
    return axios.post("http://localhost:8080/api/v1/products",
        {
            name, description, price_sale, quantity, size,
            color, status, discount, category_id, brand_id, tags_product_id, productImages
        });
};

const updateProduct = (id, name, description, price_sale, quantity, size,
    color, status, discount, category_id, brand_id, tags_product_id) => {
    return axios.post(`http://localhost:8080/api/v1/products/${id}`,
        {
            name, description, price_sale, quantity, size,
            color, status, discount, category_id, brand_id, tags_product_id
        });
};


export { DataTotalSale, createProduct, updateProduct };
