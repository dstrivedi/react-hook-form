import { FC } from 'react';

import { Form } from './Form';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>React hook form</h1>
      <Form />
    </div>
  );
};
