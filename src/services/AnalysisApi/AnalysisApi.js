import axios from 'axios';

const DataTotalUser = () => {
    return axios.get("http://localhost:8080/api/v1/user-stats");
};

const DataTotalOrders = () => {
    return axios.get("http://localhost:8080/api/v1/orders/total-order");
};

const DataTotalRevenue = () => {
    return axios.get("http://localhost:8080/api/v1/orders/total-revenue");
};

const DataTotalDay = () => {
    return axios.get("http://localhost:8080/api/v1/orders/total-revenue-day");
};

const DataTop5Product = () => {
    return axios.get("http://localhost:8080/api/v1/products/top5-best-selling");
};

export { DataTotalUser, DataTotalOrders, DataTotalRevenue, DataTotalDay, DataTop5Product };