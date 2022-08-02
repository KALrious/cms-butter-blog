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
    <li className="nav-item" onClick={callbackOnClick}>
      <a className="" href={`/${url}`}>
        {label}
      </a>
    </li>
  );
}
