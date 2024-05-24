import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Button from '@mui/material/Button';
import { deleteOne, getAll, post } from '../../services';
import { TextField } from '@mui/material';
import styles from "./index.module.scss"
import { useFormik } from 'formik';
import { ProductValidationSchema } from '../../validations/AddValidation';



function Add() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAll().then((res) => {
      setProducts(res.data.data)
    })
  }, [])
  const columns = [
    {
      title: 'Image',
      dataIndex: 'imgSrc',
      render: (record) => {
        return <img src={record} alt="" width={100} />
      }
    },
    {
      title: 'Title',
      dataIndex: 'title'
    },
    {
      title: 'Price',
      dataIndex: 'price'
    },
    {
      title: 'Action',
      render: (record) => {
        return (
          <>
            <Button variant="contained" color='error' onClick={() => {
              deleteOne(record._id)
              console.log(record._id)
              const filtered = [...products].filter((p) => p._id != record._id)
              setProducts(filtered)
            }}>Delete</Button>
          </>
        )
      }
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: 0,
      imgSrc: '',
    },
    onSubmit: (values, { resetForm }) => {
      post(values)
      console.log(values)
      resetForm()
    },
    validationSchema: ProductValidationSchema
  });
  const dataSource = products
  const [filtered, setFiltered] = useState(products)

  function handleChange(option) {
    let a;
    if (option === 'az') {
      a = [...dataSource].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    } else if (option === 'za') {
      a = [...dataSource].sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
    } else if (option === '19') {
      a = [...dataSource].sort((a, b) => a.price - b.price);
    } else if (option === '91') {
      a = [...dataSource].sort((a, b) => b.price - a.price);
    }
    setFiltered(a)
  }
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <h3>Add Form</h3>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title} />
          {formik.errors.title && formik.touched.title && <span style={{ color: "red" }}>{formik.errors.title}</span>}
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description} />
          {formik.errors.description && formik.touched.description && <span style={{ color: "red" }}>{formik.errors.description}</span>}
          <TextField
            id="outlined-basic"
            label="Image Source"
            variant="outlined"
            name="imgSrc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.imgSrc} />
          {formik.errors.outlined && formik.touched.outlined && <span style={{ color: "red" }}>{formik.errors.outlined}</span>}
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price} />
          {formik.errors.price && formik.touched.price && <span style={{ color: "red" }}>{formik.errors.price}</span>}
          <Button variant="contained" type='submit'>Add Product</Button>
        </form>

        <select onChange={(e) => handleChange(e.target.value)}>
          <option defaultValue>Select option</option>
          <option value={"az"}>A - Z</option>
          <option value={"za"}>Z - A</option>
          <option value={"19"}>Low to High</option>
          <option value={"91"}>High to Low</option>
        </select>

        <Table
          dataSource={filtered || products }
          columns={columns}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default Add