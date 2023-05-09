// import Link from "next/link";

// import Logo from "../logo/logo";

const Material = () => {
  return (
    <div className="p-4 pb-20">
      <div className="w-[60px]  xs:w-[60px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] mx-12 my-6">
        <img src={"/assets/images/logo.png"} alt="logo page" />
      </div>
      <div className="py-8 px-12 mx-20 my-4 h-full md:h-[500px] rounded-[24px] bg-white drop-shadow-lg">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-7 lg:col-span-2 xl:mr-4 lg:mr-4 xl:col-span-2 p-2 font-[500] text-[14px] border border-[#4269E1] rounded-md shadow-md">
            Bruchhausenerstraße 36
            <br />
            59759 Arnsberg
            <br />
            Deutschland
          </div>
          <div className="col-span-7 lg:col-span-5 xl:col-span-5 xl:ml-4 lg:ml-4 flex items-center font-[400] text-[24px] text-center border border-[#4269E1] rounded-lg">
            <div className="w-full grid md:grid-flow-col lg:grid-flow-col gap-4 items-center justify-between p-4">
              <div className="text-left text-[14px] md:text-[20px] lg:text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt
              </div>
              <div className="flex gap-4 justify-center md:justify-end lg:justify-end">
                <button className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] rounded-lg bg-[#4269E1] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0898 21.3665C14.172 21.3665 16.1898 20.6445 17.7994 19.3235C19.4089 18.0026 20.5107 16.1645 20.9169 14.1223C21.3231 12.0801 21.0087 9.96022 20.0271 8.12389C19.0456 6.28755 17.4577 4.84836 15.534 4.05154C13.6103 3.25472 11.4698 3.14956 9.47728 3.75399C7.48474 4.35842 5.76343 5.63504 4.60662 7.36632C3.44981 9.0976 2.92909 11.1764 3.13318 13.2486C3.33727 15.3208 4.25355 17.2581 5.72588 18.7304"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.0898 10.3665L12.4919 14.684C11.8363 15.4707 11.5085 15.864 11.068 15.884C10.6274 15.904 10.2653 15.5419 9.54123 14.8178L8.08984 13.3665"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button className="bg-[#E14242] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] rounded-lg flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3398 21.6831C11.1579 21.6831 9.98762 21.4503 8.89569 20.998C7.80376 20.5457 6.81161 19.8828 5.97588 19.0471C5.14015 18.2113 4.47722 17.2192 4.02493 16.1273C3.57264 15.0353 3.33984 13.865 3.33984 12.6831C3.33984 11.5012 3.57264 10.3309 4.02493 9.23895C4.47722 8.14702 5.14016 7.15487 5.97588 6.31914C6.81161 5.48342 7.80376 4.82048 8.89569 4.36819C9.98762 3.9159 11.1579 3.68311 12.3398 3.68311C13.5217 3.68311 14.6921 3.9159 15.784 4.36819C16.8759 4.82048 17.8681 5.48342 18.7038 6.31915C19.5395 7.15487 20.2025 8.14703 20.6548 9.23896C21.1071 10.3309 21.3398 11.5012 21.3398 12.6831C21.3398 13.865 21.1071 15.0353 20.6548 16.1273C20.2025 17.2192 19.5395 18.2113 18.7038 19.0471C17.8681 19.8828 16.8759 20.5457 15.784 20.998C14.6921 21.4503 13.5217 21.6831 12.3398 21.6831L12.3398 21.6831Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.33984 9.68311L15.3398 15.6831"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.3398 9.68311L9.33984 15.6831"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
