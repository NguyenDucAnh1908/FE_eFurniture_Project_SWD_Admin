import axios from 'axios';

const DataTotalSale = () => {
    return axios.get("http://localhost:8080/api/v1/orders-detail/chart");
};

const DataTopProductSale = () => {
    return axios.get("http://localhost:8080/api/v1/orders-detail/chart-top-sale-product");
};

const DataRating = () => {
    return axios.get("http://localhost:8080/api/v1/feedbacks/feedback/count-by-rating");
};

export { DataTotalSale, DataTopProductSale, DataRating };