/* eslint-disable */
import { SponLocation } from "../components/Spon";
import { SponTableBody } from "../components/Spon";
// import Logo from "../logo/logo";

const Material = () => {
  return (
    <div className="p-4 pb-16">
      <div className="w-[60px]  xs:w-[60px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] mx-12 my-6">
        <img src={"/assets/images/logo.png"} alt="logo page" />
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row justify-between gap-4 md:gap-16 lg:gap-16 mx-20 my-6">
        <div className="flex flex-col items-center">
          <div className="p-4 w-[350px] h-[550px] rounded-[24px] bg-white drop-shadow-lg">
            <div className="mb-2">
              <input
                type="text"
                className="h-[50px] rounded-[12px] text-[12px] font-[500] pl-3 placeholder:text-slate-400 block bg-white w-full border-2 border-[#4269E1] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Suchen..."
              ></input>
            </div>
            <div className="grid gap-2">
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
              <SponLocation children={"Emirhan Bayram"} />
            </div>
          </div>
        </div>
        <div className="w-300px md:w-full lg:w-full py-4 px-12 rounded-[24px] bg-white drop-shadow-lg">
          <div className="pb-6">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center"
              type="button"
            >
              Vorhaben{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-[14px]">
            <table className="w-full">
              <thead>
                <tr className="text-[20px] text-left">
                  <th>Vorhaben</th>
                  <th>Vorname</th>
                  <th>Nachname</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <SponTableBody
                  tb={{
                    street: "Bruchhausenerstraße 36",
                    city: "59759 Arnsberg",
                    country: "Germany",
                    first_name: "David",
                    last_name: "David",
                  }}
                />
                <SponTableBody
                  tb={{
                    street: "Bruchhausenerstraße 36",
                    city: "59759 Arnsberg",
                    country: "Germany",
                    first_name: "David",
                    last_name: "David",
                  }}
                />
                <SponTableBody
                  tb={{
                    street: "Bruchhausenerstraße 36",
                    city: "59759 Arnsberg",
                    country: "Germany",
                    first_name: "David",
                    last_name: "David",
                  }}
                />
                <SponTableBody
                  tb={{
                    street: "Bruchhausenerstraße 36",
                    city: "59759 Arnsberg",
                    country: "Germany",
                    first_name: "David",
                    last_name: "David",
                  }}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
