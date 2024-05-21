import axios from "axios";

export async function getAll() {
  try {
    const res = await axios.get("http://localhost:2004/menu");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getOne(id) {
  try {
    const res = await axios.get(`http://localhost:2004/menu/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteOne(id) {
  try {
    const res = await axios.delete(`http://localhost:2004/menu/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function post(id,) {
  try {
    const res = await axios.post(`http://localhost:2004/menu/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
