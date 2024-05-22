import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from "./index.module.scss"
import Button from '@mui/material/Button';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { deleteOne, getAll, post } from '../../services';
import { useFormik } from 'formik';
import ShopValidation from '../../validations/AddValidation';


function Add() {
    const [shops, setShops] = useState([])
    useEffect(() => {
        getAll().then((res) => {
            setShops(res.data)
        })
    }, [])
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Image',
            dataIndex: 'imgSrc',
            render: (record) => {
                return (
                    <>
                        <img src={record} alt="" width={100} />
                    </>
                )
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            render: (record) => {
                return <Button variant="contained" color='error' onClick={() => {
                    deleteOne(record._id);
                    const filtered = [...shops].filter((m) => m._id != record._id);
                    setShops(filtered);
                }}>Delete</Button>
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
            discountPercentage: 0,
            isNewShop: false,
        },
        onSubmit: (values, { resetForm }) => {
            post(values)
            resetForm()
        },
        validationSchema: ShopValidation
    });
    return (
        <>
            <div className="container">
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <h3>Add form</h3>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title} />
                    {formik.errors.title && formik.touched.title && (<span style={{ color: "red" }}>{formik.errors.title}</span>)}
                    <TextField
                        id="outlined-basic"
                        label="İmage Source"
                        variant="outlined"
                        name="imgSrc"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.imgSrc} />
                    {formik.errors.imgSrc && formik.touched.imgSrc && (<span style={{ color: "red" }}>{formik.errors.imgSrc}</span>)}
                    <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        name="description"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.description} />
                    {formik.errors.description && formik.touched.description && (<span style={{ color: "red" }}>{formik.errors.description}</span>)}
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.price} />
                    {formik.errors.price && formik.touched.price && (<span style={{ color: "red" }}>{formik.errors.price}</span>)}
                    <TextField
                        id="outlined-basic"
                        label="Discount Percentage"
                        variant="outlined"
                        name="discountPercentage"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.discountPercentage} />
                    {formik.errors.discountPercentage && formik.touched.discountPercentage && (<span style={{ color: "red" }}>{formik.errors.discountPercentage}</span>)}
                    <FormControlLabel control={<Checkbox
                        name="isNewShop"
                        onChange={formik.handleChange}
                        value={formik.values.isNewShop}
                    />} label="is Product new ?" />
                    {formik.errors.isNewShop && formik.touched.isNewShop && (<span style={{ color: "red" }}>{formik.errors.isNewShop}</span>)}
                    <Button variant="contained" type='submit'>Add</Button>
                </form>
                <Table
                    columns={columns}
                    dataSource={shops}
                    onChange={onChange}
                    showSorterTooltip={{
                        target: 'sorter-icon',
                    }}
                />
            </div>
        </>
    )
}

export default Add