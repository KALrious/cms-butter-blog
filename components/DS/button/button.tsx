import clsx from 'clsx';
import { ElementType, FC, HTMLAttributes } from 'react';

type Props = {
  component: 'button' | 'a';
  href?: string;
};

const Button: FC<Props & HTMLAttributes<HTMLElement>> = ({
  component,
  children,
  className,
  ...rest
}) => {
  const HtmlTag = component as ElementType;
  return (
    <HtmlTag
      {...rest}
      className={clsx(
        'bg-sky-500 font-normal text-center py-4 px-7 text-white rounded-xl border-2 border-transparent relative text-lg hover:bg-sky-400 hover:cursor-pointer',
        className
      )}>
      {children}
    </HtmlTag>
  );
};

export default Button;
