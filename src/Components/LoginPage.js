// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import './FormStyles.css';

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   password: Yup.string().required('Password is required'),
// });

// const LoginPage = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema),
//   });
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(user => user.email === data.email && user.password === data.password);
//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       navigate('/dashboard');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Email</label>
//           <input type="email" {...register('email')} />
//           {errors.email && <p className="error">{errors.email.message}</p>}
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" {...register('password')} />
//           {errors.password && <p className="error">{errors.password.message}</p>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <a onClick={() => navigate('/register')}>Register</a>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate,Link } from 'react-router-dom';
import './FormStyles.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('*Email is required'),
  password: Yup.string().required('*Password is required'),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === data.email && user.password === data.password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to={'/register'}>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;

