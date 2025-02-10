import type { ReactNode, ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: ReactNode;
  "aria-label": string;
}

export default function IconButton({
  onClick,
  icon,
  ...rest
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-200"
      {...rest}
    >
      {icon}
    </button>
  );
}
