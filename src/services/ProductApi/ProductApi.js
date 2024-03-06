import axios from 'axios';

const DataTotalSale = () => {
    return axios.get("http://localhost:8080/api/v1/products/get_all");
};

const createProduct = (name, description, thumbnail, price_sale, quantity, material, size,
    color, quantity_sold, status, discount, category_id, brand_id, tags_product_id) => {
    return axios.post("http://localhost:8080/api/v1/products",
        {
            name, description, thumbnail, price_sale, quantity, material, size,
            color, quantity_sold, status, discount, category_id, brand_id, tags_product_id
        });
};

export { DataTotalSale, createProduct };
