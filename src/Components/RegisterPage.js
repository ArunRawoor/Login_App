import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './FormStyles.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('*Email is required'),
  password: Yup.string().required('*Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '*Passwords must match')
    .required('*Confirm Password is required'),
});

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = { email: data.email, password: data.password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/Login_App');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          {errors.email && <p className="error">{errors.email.message}</p>}
          <input type="email" {...register('email')} />   
        </div>
        <div>
          <label>Password</label>
          {errors.password && <p className="error">{errors.password.message}</p>}
          <input type="password" {...register('password')} />
        </div>
        <div>
          <label>Confirm Password</label>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          <input type="password" {...register('confirmPassword')} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to='/Login_App'>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
