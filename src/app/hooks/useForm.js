import {useState} from 'react';

export default function useForm(initialValues = {}) {

    const [formValues, setFormValue] = useState(initialValues);

    const resetForm = () => {
        setFormValue(initialValues)
    }

    const handleInputChange = ({target}) => {
        setFormValue(
            (formState) => {
                return {
                    ...formState,
                    [target.name]: target.value,
                }
            }
        );
    }

    return [
        formValues,
        handleInputChange,
        resetForm,
    ];
}