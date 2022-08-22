import { ElementType, FC, HTMLAttributes } from 'react';

type Props = {
  component: 'button' | 'a';
  href?: string;
};

const IconButton: FC<HTMLAttributes<HTMLButtonElement> & Props> = ({
  children,
  component,
  ...rest
}) => {
  const HtmlTag = component as ElementType;
  return (
    <HtmlTag
      className="text-2xl w-11 h-11 rounded-full bg-sky-300 text-black hover:text-white hover:bg-sky-500 hover:cursor-pointer flex justify-center items-center"
      {...rest}>
      {children}
    </HtmlTag>
  );
};

export default IconButton;
