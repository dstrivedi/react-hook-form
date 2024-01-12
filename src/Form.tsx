import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import './style.css';

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { touched },
  } = useForm({
    defaultValues: {
      firstName: 'Bill',
      lastName: 'luo',
      amount: '',
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log('touched', touched);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>First Name</label>
      <input type="text" {...register('firstName', { required: true })} />

      <label>Last Name</label>
      <input type="text" {...register('lastName'), { required: true }} />

      <label>Email</label>
      <input type="number" {...register('amount', { min: 1, max: 99 })} />
      
      <input type="submit" />
    </form>
  );
};
