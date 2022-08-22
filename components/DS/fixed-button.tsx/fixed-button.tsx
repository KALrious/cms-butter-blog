import { ElementType, FC, HTMLAttributes } from 'react';

type Props = {
  component: 'button' | 'a';
  href?: string;
};

const FixedButton: FC<HTMLAttributes<HTMLButtonElement> & Props> = ({
  children,
  component,
  ...rest
}) => {
  const HtmlTag = component as ElementType;
  return (
    <HtmlTag
      className="fixed w-11 h-11 bottom-8 right-8 rounded-md bg-sky-500 text-white hover:opacity-80 hover:cursor-pointer flex justify-center items-center"
      {...rest}>
      {children}
    </HtmlTag>
  );
};

export default FixedButton;
