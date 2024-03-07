import axios from 'axios';

const dataOrderStatus = () => {
    return axios.get("http://localhost:8080/api/v1/payment-status");
};

const dataOrderDetail = () => {
    return axios.get("http://localhost:8080/api/v1/payment-status");
};

export { dataOrderStatus };