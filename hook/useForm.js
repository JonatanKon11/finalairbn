import { useState } from 'react';

export const useForm = (initialForm = { }) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (value, name) => {
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetFrom = () => {
        setFormState(initialForm);
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetFrom,
    }
}
