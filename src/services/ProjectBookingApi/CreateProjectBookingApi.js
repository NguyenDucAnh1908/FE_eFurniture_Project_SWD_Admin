import axios from 'axios';

const createProjectBooking = (id, projectName, projectType, size, designStyle, colorSchemes, intendUse, occupantsNumber, timeline, projectPrice, userId, bookingId ) => {
    return axios.post("http://localhost:8080/api/v1/booking/register-project-booking", {
        id, projectName, projectType, size, designStyle, colorSchemes, intendUse, occupantsNumber, timeline, projectPrice, userId, bookingId

    });

};  