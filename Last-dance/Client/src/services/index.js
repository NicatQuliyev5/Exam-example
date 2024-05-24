import axios from "axios"

export async function getAll() {
    try {
        const res = await axios.get("http://localhost:2305/products")
        return res
    } catch (err) {
        console.log(err)
    }
}

export async function getOne(id) {
    try {
        const res = await axios.get(`http://localhost:2305/products/${id}`)
        return res
    } catch (err) {
        console.log(err)
    }
}

export async function deleteOne(id) {
    try {
        const res = await axios.delete(`http://localhost:2305/products/${id}`)
        return res
    } catch (err) {
        console.log(err)
    }
}

export async function post(payload) {
    try {
        const res = await axios.post(`http://localhost:2305/products/${payload}`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}