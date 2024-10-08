import { SVGProps } from "react";

export const SmartPhoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      className={`text-black dark:text-white 
        transition-colors duration-1000 ease-in-out `}
      {...props}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />{" "}
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
};
