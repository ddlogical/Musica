import './BuyForm.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeAllFromCart } from '../../../store/cartSlice/cartSlice';
import { PatternFormat } from "react-number-format";
import { memo } from 'react';

const TextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name} className='cart-section__buy-label'>{label}</label>
            <div className='cart-section__buy-content'>
                <input className={`cart-section__buy-input ${meta.touched && meta.error ? 'cart-section__buy-input--invalid' : ''}`} {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className='cart-section__buy-error'>{meta.error}</div>
                ) : null}
            </div>

        </>
    );
};

const TextPhoneInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name} className='cart-section__buy-label'>{label}</label>
            <div className='cart-section__buy-content'>
                <PatternFormat  allowEmptyFormatting format="(###) ###-##-##" mask="#" className={`cart-section__buy-input ${meta.touched && meta.error ? 'cart-section__buy-input--invalid' : ''}`} {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className='cart-section__buy-error'>{meta.error}</div>
                ) : null}
            </div>

        </>
    );
};

function BuyForm() {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.store.cart, shallowEqual);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('This field is required'),
                lastName: Yup.string()
                    .required('This field is required'),
                address: Yup.string()
                    .required('This field is required'),
                phoneNumber: Yup.string()
                    .required('This field is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                const cartData = [...cart];
                const soldInfo = {...values, soldGoods: cartData}
                console.log('Информация о продаже: ', soldInfo);
                dispatch(removeAllFromCart());
            }}
        >
            <Form className='cart-section__buy-form'>

                <h3 className='cart-section__buy-heading'>Buy Albums</h3>

                <TextInput 
                    label="Enter your first name:"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                />

                <TextInput 
                    label="Enter your last name:"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                />

                <TextInput 
                    label="Enter your address:"
                    name="address"
                    type="text"
                    placeholder="Your address"
                />

                <TextPhoneInput 
                    label="Enter your phone number:"
                    name="phoneNumber"
                    type="text"
                />

                <button type="submit" className='cart-section__buy-submit'>Checkout</button>
            </Form>
        </Formik>
    );
}

export default memo(BuyForm);
