import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsBlogItem extends HTMLProps<HTMLInputElement> {
  children: ReactNode;
}

const MaterialBlogItem: FC<PropsBlogItem> = ({ children }) => {
  return (
    <div className="grid gap-2 w-full md:grid-flow-col lg:grid-flow-col items-center justify-between p-3 border-2 border-[#4269E1] rounded-[12px]">
      <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] rounded-lg flex items-center justify-center">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8188 2.948H17.9228V0.284H10.8188V2.948ZM0.0668439 2.948H7.17084V0.284H0.0668439V2.948ZM0.0668439 8.42H7.17084V5.756H0.0668439V8.42ZM10.8188 8.42H17.9228V5.756H10.8188V8.42ZM0.0668439 13.892H7.17084V11.228H0.0668439V13.892ZM10.8188 13.892H17.9228V11.228H10.8188V13.892Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="font-[400] text-[20px] px-2 text-center">{children}</div>
      <div className="flex gap-4 justify-center md:justify-end lg:justify-end">
        <button className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] rounded-lg bg-[#AAAFB6] flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.2028 10.7959L18.9988 8.99994C19.544 8.45469 19.8167 8.18207 19.9624 7.88797C20.2397 7.32842 20.2397 6.67146 19.9624 6.11191C19.8167 5.81782 19.544 5.54519 18.9988 4.99994C18.4535 4.45469 18.1809 4.18207 17.8868 4.03633C17.3273 3.75905 16.6703 3.75905 16.1108 4.03633C15.8167 4.18207 15.544 4.45469 14.9988 4.99994L13.1801 6.8186C14.144 8.4692 15.5301 9.84476 17.2028 10.7959ZM11.7257 8.27305L4.85517 15.1436C4.43011 15.5686 4.21758 15.7812 4.07785 16.0422C3.93811 16.3033 3.87917 16.5981 3.76128 17.1875L3.14588 20.2645C3.07936 20.5971 3.0461 20.7634 3.14071 20.858C3.23532 20.9526 3.40162 20.9194 3.73423 20.8529L6.81121 20.2375C7.40066 20.1196 7.69539 20.0606 7.95649 19.9209C8.21758 19.7812 8.43012 19.5686 8.85518 19.1436L15.7446 12.2542C14.1229 11.2385 12.7512 9.87622 11.7257 8.27305Z"
              fill="#222222"
            />
          </svg>
        </button>
        <button className="bg-[#E14242] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] rounded-lg flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15L10 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 15L14 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MaterialBlogItem;
