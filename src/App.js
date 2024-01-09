// src/FormComponent.js

import React from 'react';
import { useForm } from 'react-hook-form';


function FormComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div className="form-group">
          <label>First Name</label>
          <input
            {...register('firstName', { required: 'First Name is required' })}
          />
          {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name</label>
          <input
            {...register('lastName', { required: 'Last Name is required' })}
          />
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email',
              },
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be more than 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Password cannot be more than 20 characters',
              },
            })}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FormComponent;
