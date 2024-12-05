import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

function AndroidIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M9 9h6" />
      <path d="M13 13h2" />
      <path d="M9 13h2" />
      <path d="M9 17h6" />
    </svg>
  );
}

export default AndroidIcon;
