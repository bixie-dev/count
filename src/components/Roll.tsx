/* eslint-disable */
import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsRoleTb extends HTMLProps<HTMLInputElement> {
  tb: any & { role: string; num: number };
}
interface PropsRoleDs extends HTMLProps<HTMLInputElement> {
  children: ReactNode;
}

const RoleTb: FC<PropsRoleTb> = ({ tb }) => {
  return (
    <>
      <tr className="">
        <td className="">{tb.role}</td>
        <td className="text-center">{tb.num}</td>
        <td className="">
          <button className="bg-[#4269E1] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="4" fill="white" />
              <path
                d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>
        </td>
        <td className="">
          <button className="bg-[#B9B9B9] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2028 10.796L18.9988 9C19.544 8.45475 19.8167 8.18213 19.9624 7.88803C20.2397 7.32848 20.2397 6.67153 19.9624 6.11197C19.8167 5.81788 19.544 5.54525 18.9988 5C18.4535 4.45475 18.1809 4.18213 17.8868 4.03639C17.3273 3.75911 16.6703 3.75911 16.1108 4.03639C15.8167 4.18213 15.544 4.45475 14.9988 5L13.1801 6.81866C14.144 8.46926 15.5301 9.84482 17.2028 10.796ZM11.7257 8.27312L4.85517 15.1436C4.43011 15.5687 4.21758 15.7812 4.07785 16.0423C3.93811 16.3034 3.87917 16.5981 3.76128 17.1876L3.14588 20.2646C3.07936 20.5972 3.0461 20.7635 3.14071 20.8581C3.23532 20.9527 3.40162 20.9194 3.73423 20.8529L6.81121 20.2375C7.40066 20.1196 7.69539 20.0607 7.95649 19.9209C8.21758 19.7812 8.43012 19.5687 8.85518 19.1436L15.7446 12.2542C14.1229 11.2386 12.7512 9.87628 11.7257 8.27312Z"
                fill="#F2F5FA"
              />
            </svg>
          </button>
        </td>
        <td className="">
          <button className="bg-[#E14242] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
            <svg
              width="20"
              height="20"
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
        </td>
      </tr>
    </>
  );
};

const RoleDs: FC<PropsRoleDs> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div>{children}</div>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export { RoleTb, RoleDs };
