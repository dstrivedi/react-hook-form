import * as React from 'react';
import { useForm, useController, UseControllerProps } from 'react-hook-form';
import './style.css';

type FormValues = {
  FirstName: string;
};

function Input(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
    </div>
  );
}

export default function FormController() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      FirstName: '',
    },
    mode: 'onChange',
  });
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="FirstName" rules={{ required: true }} />
        <input type="submit" />
      </form>
    </div>
  );
}
