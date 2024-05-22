import * as Yup from 'yup'

const AddMenus = Yup.object().shape({
    title: Yup.string().min(2).max(50).required("Required"),
    price: Yup.number().required("Required"),
    imgSrc: Yup.string().url().required("Required"),
    description: Yup.string().required("Required"),
})

export default AddMenus