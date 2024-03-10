import axios from 'axios';

const dataOrderpaymentStatus = () => {
    return axios.get("http://localhost:8080/api/v1/payment-status");
};

const dataOrderDetail = () => {
    return axios.get("http://localhost:8080/api/v1/payment-status");
};

const dataStatusOrder = () =>{
    return axios.get("http://localhost:8080/api/v1/orders-status");
};

export { dataOrderpaymentStatus, dataStatusOrder };