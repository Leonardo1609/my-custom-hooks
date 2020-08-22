# useForm

Ejemplo:

```
    const initialForm = {
        namme:'',
        age: 0,
        email: ''
    };
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
```