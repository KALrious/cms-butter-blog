type Props = {
  url: string;
  label: string;
  active?: boolean;
  callbackOnClick?: () => void;
};

export default function MainMenuLink({
  url,
  label,
  active = false,
  callbackOnClick,
}: Props) {
  return (
    <li
      onClick={callbackOnClick}
      className="typography-a:text-gray-600 hover:typography-a:text-black active:typography-a:text-black">
      <a
        className="hover:underline hover:underline-offset-3 hover:decoration-2 hover:decoration-black"
        href={`/${url}`}>
        {label}
      </a>
    </li>
  );
}
