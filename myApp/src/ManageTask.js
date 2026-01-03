import axios from "axios";

export async function GetTasks(url) {
    try {
        const res = await axios.get(`${url}/tasks`);
        console.log('data fetched!');
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function PostNewTask(url, task) {
    try {
        const res = await axios.post(`${url}/tasks`, task);
        console.log('data posted!');
        return res.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function DeleteTask(url, id) {
    try{
        await axios.delete(`${url}/tasks/${id}`);
    } catch (error) {
        console.error(error);
    }
}

export async function PatchTask(url, id, changed) {
    try{
        const completedDto = { completed: changed };
        await axios.patch(`${url}/tasks/${id}`, completedDto);
    } catch (error) {
        console.error(error);
    } 
}