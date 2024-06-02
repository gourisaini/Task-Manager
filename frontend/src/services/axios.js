import axios from 'axios'


const url = process.env.API
export const addTask = async (data) => {
    try {
        await axios.post(`${url}/createTask/`, data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTask = async (id) => {
    try {
        let response = await axios.get(`${url}/getTask/${id ? id : ""}`);
        return response
    } catch (error) {
        console.log(error.message);
    }
}

export const getTaskByUser = async (userID) => {
    try {
        let response = await axios.get(`${url}/getUserTask/${userID}`);
        return response
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTask = async (id, data) => {
    try {
        await axios.put(`${url}/updateTask/${id}`, data);
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTask = async (id) => {
    try {
        await axios.delete(`${url}/deleteTask/${id}`);
    } catch (error) {
        console.log(error.message);
    }
}
