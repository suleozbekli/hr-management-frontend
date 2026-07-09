import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// EMPLOYEE

export const getEmployees = () =>
    api.get("/employees");

export const addEmployee = (employee) =>
    api.post("/employees", employee);

export const updateEmployee = (id, employee) =>
    api.put(`/employees/${id}`, employee);

export const deleteEmployee = (id) =>
    api.delete(`/employees/${id}`);


// LEAVE

export const getLeaves = () =>
    api.get("/leaves");

export const createLeave = (leave) =>
    api.post("/leaves", leave);

export const approveLeave = (id) =>
    api.put(`/leaves/${id}/status`, "APPROVED", {
        headers: {
            "Content-Type": "text/plain"
        }
    });

export const rejectLeave = (id) =>
    api.put(`/leaves/${id}/status`, "REJECTED", {
        headers: {
            "Content-Type": "text/plain"
        }
    });

export default api;