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
      className="prose-a:text-gray-600 hover:prose-a:text-black active:prose-a:text-black">
      <a href={`/${url}`}>{label}</a>
    </li>
  );
}
