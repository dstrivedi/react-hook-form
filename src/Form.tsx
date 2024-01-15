import { useForm, FormProvider } from 'react-hook-form';

import './style.css';

let renderCount = 0;

type FormValues = {
  firstName: string,
  lastName: string,
  dob: string,
  email: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,touchedFields, isSubmitSuccessful, isDirty, isSubmitted, dirtyFields, isLoading, submitCount, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  renderCount++;

  // console.log('touched', touchedFields);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h1>Render count: {renderCount}</h1>

      <label>First Name</label>
      <input type="text" placeholder='Enter firstname' {...register('firstName', { required: true })} />
      {errors.firstName && <p>This fields is required.</p>}

      <label>Last Name</label>
      <input type="text" placeholder='Enter lastname' {...register('lastName', { required: true })} />
      {errors.lastName && <p>This fields is required.</p>}

      <label>Email</label>
      <input type="number" placeholder='Enter email' {...register('email', { required: true })} />
      {errors.email && <p>This fields is required.</p>}

      <label>Date of Birth</label>
      <input type="date" {...register('dob', {required: true})} />
      {errors.dob && <p>This fields is required.</p>}
      
      <input type="submit" />
    </form>
  );
};
