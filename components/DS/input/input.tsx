import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

type Props = {
  type: 'email';
};

const Input: FC<Props & HTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  type,
  className,
}) => (
  <input
    className={clsx(
      'border border-solid border-sky-500 bg-sky-50 rounded-xl px-5 py-4',
      className
    )}
    placeholder={placeholder}
    type={type}
  />
);

export default Input;
