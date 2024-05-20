import axios from 'axios'

export async function getAll() {
    try {
        const res = await axios.get("http://localhost:2121/products")
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getOne(id) {
    try {
        const res = await axios.get(`http://localhost:2121/products/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}