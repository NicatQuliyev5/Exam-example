import * as Yup from 'yup';

const ShopValidation = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    imgSrc: Yup.string().url('Invalid url').required('Required'),
    price: Yup.number().required('Required'),
    discountPercentage: Yup.number().required('Required'),
});

export default ShopValidation