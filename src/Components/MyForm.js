import React, { useState } from 'react';
// import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('form is submitted')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;





// import React, { useState } from 'react';
// import axios from 'axios';

// const MyForm = () => {
//   const initialFormData = {
//     firstName: '',
//     lastName: '',
//     email: '',
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);

//     // Clear form data after submission
//     setFormData(initialFormData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;








// import React, { useState } from 'react';
// import axios from 'axios';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Reset error message when user starts typing
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let formIsValid = true;
//     const newErrors = { ...errors };

//     // Validate firstName
//     if (formData.firstName.trim() === '') {
//       newErrors.firstName = 'First Name is required';
//       formIsValid = false;
//     }

//     // Validate lastName
//     if (formData.lastName.trim() === '') {
//       newErrors.lastName = 'Last Name is required';
//       formIsValid = false;
//     }

//     // Validate email
//     if (formData.email.trim() === '') {
//       newErrors.email = 'Email is required';
//       formIsValid = false;
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//       formIsValid = false;
//     }

//     // If form is valid, submit data
//     if (formIsValid) {
//       console.log('Form Data:', formData);
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         {errors.firstName && <span className="error">{errors.firstName}</span>}
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         {errors.lastName && <span className="error">{errors.lastName}</span>}
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
