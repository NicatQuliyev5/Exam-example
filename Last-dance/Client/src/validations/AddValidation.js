import * as Yup from 'yup';

export const ProductValidationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    price: Yup.number().required('Required'),
    imgSrc: Yup.string().url('Invalid url').required('Required'),
});