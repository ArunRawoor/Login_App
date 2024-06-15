    import React, { useState } from 'react';
    import './ReactVlaidForm.css';

    const ReactVlaidForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!formData.name) {
        errors.name = '* indicates  Name is required';
        }

        if (!formData.email) {
        errors.email = '* Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = '* Email address is invalid';
        }

        if (!formData.password) {
        errors.password = '* Password is required';
        } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        console.log('Form is valid',formData);
        // Submit the form data to the server or perform other actions here like CRUD 
        } else {
        console.log('Form has errors');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <h1>React Form With the Vlaidation</h1>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            </label>
            {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            </label>
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
            <label>
            Password:
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            </label>
            {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
        </form>
    );
    };

    export default ReactVlaidForm;
