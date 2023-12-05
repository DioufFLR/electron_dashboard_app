import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '@/components/Header';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: ""
}

const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
})

const Form = () =>
{

    const isNonMobile = useMediaQuery('(min-width: 600px');

    const handleFormSubmit = ( values ) =>
    {
        console.log(values);
    }

    return (
        <Box m='20px'>
            <Header title="CREATE USER" subtitle='Create a New User Profile'/>

            <Formik
                initialValues={ initialValues }
                onSubmit={ handleFormSubmit }
                validationSchema={userSchema}
            >

            </Formik>
        </Box>
    )
}

export default Form;