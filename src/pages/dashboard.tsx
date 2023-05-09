/* eslint-disable */
import {
  DashCount,
  DashLoc,
  DashLocRed,
  DashLocGreen,
} from "../components/Dashboard";
// import Logo from "../logo/logo";

const Dashboard = () => {
  return (
    <div className="p-4 mx-8">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-[60px]  xs:w-[60px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px]">
          <img src={"/assets/images/logo.png"} alt="logo page" />
        </div>

        <button className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00001 10.8333V10.8333C5.00001 9.74772 5.00001 9.20492 5.13886 8.76455C5.43319 7.83106 6.1644 7.09984 7.0979 6.80551C7.53827 6.66667 8.08107 6.66667 9.16668 6.66667L32.3333 6.66667C32.8047 6.66667 33.0404 6.66667 33.1869 6.81311C33.3333 6.95956 33.3333 7.19526 33.3333 7.66667V9C33.3333 11.8284 33.3333 13.2426 32.4547 14.1213C31.576 15 30.1618 15 27.3333 15H25M5.00001 10.8333V10.8333C5.00001 11.9189 5.00001 12.4617 5.13886 12.9021C5.43319 13.8356 6.1644 14.5668 7.0979 14.8612C7.53827 15 8.08107 15 9.16668 15L33 15C33.9428 15 34.4142 15 34.7071 15.2929C35 15.5858 35 16.0572 35 17L35 21.6667M5.00001 10.8333L5.00001 31C5.00001 32.8856 5.00001 33.8284 5.5858 34.4142C6.17159 35 7.1144 35 9.00001 35L33 35C33.9428 35 34.4142 35 34.7071 34.7071C35 34.4142 35 33.9428 35 33L35 28.3333M35 28.3333H27C26.0572 28.3333 25.5858 28.3333 25.2929 28.0404C25 27.7475 25 27.2761 25 26.3333V23.6667C25 22.7239 25 22.2525 25.2929 21.9596C25.5858 21.6667 26.0572 21.6667 27 21.6667H35M35 28.3333L35 21.6667"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </button>
        <button className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66699 6.6665H10.1054C10.8554 6.6665 11.2304 6.6665 11.5016 6.8783C11.7729 7.09009 11.8638 7.45387 12.0457 8.18143L12.5762 10.3033C12.94 11.7584 13.1219 12.486 13.6644 12.9096C14.2069 13.3332 14.9569 13.3332 16.4568 13.3332H16.667"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M30 28.3335H12.5848C11.4981 28.3335 10.9548 28.3335 10.6585 28.0181C10.5993 27.9551 10.5485 27.8846 10.5074 27.8085C10.3019 27.4277 10.4737 26.9122 10.8174 25.8813V25.8813C11.1961 24.7451 11.3855 24.177 11.8044 23.8168C11.891 23.7425 11.9837 23.6756 12.0816 23.617C12.5558 23.3335 13.1546 23.3335 14.3523 23.3335H23.3333"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.8615 23.3335H16.7222C15.1038 23.3335 14.2947 23.3335 13.7352 22.8595C13.1757 22.3856 13.0426 21.5874 12.7766 19.9911L12.2492 16.8267C11.9789 15.2051 11.8438 14.3944 12.2932 13.8639C12.7425 13.3335 13.5645 13.3335 15.2084 13.3335H30.0976C31.548 13.3335 32.2732 13.3335 32.5663 13.8078C32.8594 14.282 32.5351 14.9307 31.8864 16.2279L29.4392 21.1223C28.9013 22.1982 28.6324 22.7361 28.1491 23.0348C27.6657 23.3335 27.0643 23.3335 25.8615 23.3335Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="28.3337" cy="33.3332" r="1.66667" fill="white" />
            <circle cx="14.9997" cy="33.3332" r="1.66667" fill="white" />
          </svg>
        </button>
        <button className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19.9997"
              cy="11.6667"
              r="6.66667"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M9.78163 27.5694C10.7494 24.8666 13.4381 23.3335 16.3089 23.3335H23.6904C26.5613 23.3335 29.2499 24.8666 30.2177 27.5694C30.8778 29.4128 31.4915 31.6802 31.6349 34.0007C31.669 34.5519 31.2186 35.0002 30.6663 35.0002H9.33301C8.78072 35.0002 8.33038 34.5519 8.36445 34.0007C8.50787 31.6802 9.12154 29.4128 9.78163 27.5694Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="15" stroke="white" strokeWidth="3" />
            <circle
              cx="20.0003"
              cy="29.9998"
              r="0.833333"
              fill="white"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M20 26.6665V24.3017C20 22.728 21.007 21.3308 22.5 20.8332V20.8332C23.993 20.3355 25 18.9383 25 17.3646V16.5093C25 13.8347 22.8318 11.6665 20.1572 11.6665H20C17.2386 11.6665 15 13.9051 15 16.6665V16.6665"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </button>
        <button className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-lg bg-[#4269E1] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5131 5.13449H22.0131V5.2093L22.0206 5.28374L23.5131 5.13449ZM23.5131 5.13447H25.0131V5.05965L25.0057 4.98521L23.5131 5.13447ZM23.6563 6.56671L22.1638 6.71596V6.71596L23.6563 6.56671ZM26.9129 7.91562L27.8627 9.07655V9.07655L26.9129 7.91562ZM28.0269 7.00418L27.077 5.84324V5.84324L28.0269 7.00418ZM30.7076 7.13788L31.7682 6.07722L31.7682 6.07722L30.7076 7.13788ZM32.8619 9.29224L31.8012 10.3529L31.8012 10.3529L32.8619 9.29224ZM33.7935 10.5895L35.2916 10.5147L35.2916 10.5147L33.7935 10.5895ZM32.9956 11.9729L34.1565 12.9228V12.9228L32.9956 11.9729ZM32.0841 13.087L30.9232 12.1371V12.1371L32.0841 13.087ZM33.433 16.3435L33.2838 17.8361L33.433 16.3435ZM34.8654 16.4867L35.0146 14.9942L34.8654 16.4867ZM36.4078 16.9008L35.2956 17.9073L35.2956 17.9073L36.4078 16.9008ZM36.4078 23.0995L35.2956 22.093L35.2956 22.093L36.4078 23.0995ZM34.8654 23.5136V25.0136H34.9402L35.0146 25.0062L34.8654 23.5136ZM34.8654 23.5136V22.0136H34.7905L34.7161 22.021L34.8654 23.5136ZM33.4337 23.6568L33.5829 25.1493L33.4337 23.6568ZM30.7544 24.4546L29.3686 23.8806L29.3686 23.8806L30.7544 24.4546ZM32.0848 26.9133L33.2457 25.9635V25.9635L32.0848 26.9133ZM32.9957 28.0267L34.1566 27.0768L32.9957 28.0267ZM32.862 30.7074L33.9226 31.768V31.768L32.862 30.7074ZM30.7076 32.8617L29.647 31.801V31.801L30.7076 32.8617ZM29.4104 33.7933L29.4851 35.2914L29.4851 35.2914L29.4104 33.7933ZM28.0269 32.9954L27.0771 34.1563L27.0771 34.1563L28.0269 32.9954ZM26.913 32.084L25.9527 33.2363L25.9631 33.2449L26.913 32.084ZM26.913 32.084L27.8733 30.9316L27.8628 30.923L26.913 32.084ZM24.4543 30.7536L25.0283 32.1394L25.0283 32.1394L24.4543 30.7536ZM23.6564 33.4329L22.1639 33.2836V33.2836L23.6564 33.4329ZM23.5131 34.8658L22.0206 34.7166L22.0131 34.791V34.8658H23.5131ZM23.5131 34.8659L25.0057 35.0151L25.0131 34.9407V34.8659H23.5131ZM23.099 36.4083L22.0925 35.2961L22.0925 35.2961L23.099 36.4083ZM16.9003 36.4083L17.9068 35.2961L17.9068 35.2961L16.9003 36.4083ZM16.4863 34.8658L14.9937 35.0151L16.4863 34.8658ZM16.343 33.4335L17.8356 33.2843L16.343 33.4335ZM13.0865 32.0846L12.1366 30.9237L12.1366 30.9237L13.0865 32.0846ZM11.9724 32.9962L12.9222 34.1571L12.9222 34.1571L11.9724 32.9962ZM9.29168 32.8625L8.23102 33.9231L9.29168 32.8625ZM7.13732 30.7081L8.19798 29.6475L7.13732 30.7081ZM6.20575 29.4109L4.70761 29.4856L6.20575 29.4109ZM7.00362 28.0274L5.84269 27.0776L5.84269 27.0776L7.00362 28.0274ZM7.91512 26.9134L9.07606 27.8632L9.07606 27.8632L7.91512 26.9134ZM6.56621 23.6568L6.71547 22.1643H6.71547L6.56621 23.6568ZM5.134 23.5136L5.28326 22.021L5.20881 22.0136H5.134V23.5136ZM5.13398 23.5136L4.98472 25.0062L5.05917 25.0136H5.13398V23.5136ZM3.59156 23.0995L4.70374 22.093L4.70373 22.093L3.59156 23.0995ZM3.59156 16.9008L2.47938 15.8943L2.47938 15.8943L3.59156 16.9008ZM5.134 16.4867L4.98475 14.9942H4.98474L5.134 16.4867ZM6.56685 16.3434L6.41759 14.8509H6.41759L6.56685 16.3434ZM9.24614 15.5456L7.86032 14.9716L7.86032 14.9716L9.24614 15.5456ZM7.91576 13.0869L6.75482 14.0368H6.75482L7.91576 13.0869ZM7.0037 11.9722L8.16464 11.0223L8.16464 11.0223L7.0037 11.9722ZM9.29176 7.13712L10.3524 8.19778V8.19778L9.29176 7.13712ZM11.9724 7.00342L11.0226 8.16436L11.9724 7.00342ZM13.0865 7.91496L14.0364 6.75402L13.0865 7.91496ZM15.5452 9.24534L16.1193 10.6312L16.1193 10.6312L15.5452 9.24534ZM16.3431 6.56605L14.8505 6.41679V6.4168L16.3431 6.56605ZM16.4863 5.13449L14.9937 4.98523V4.98523L16.4863 5.13449ZM16.9003 3.59204L15.8938 2.47986L15.8938 2.47987L16.9003 3.59204ZM23.099 3.59204L22.0925 4.70422L22.0925 4.70422L23.099 3.59204ZM25.0131 5.13449V5.13447H22.0131V5.13449H25.0131ZM25.1489 6.41745L25.0057 4.98523L22.0206 5.28374L22.1638 6.71596L25.1489 6.41745ZM25.0282 7.86018C25.4272 8.02546 25.4397 8.3686 25.3639 8.0671C25.2875 7.76348 25.2356 7.28493 25.1489 6.41745L22.1638 6.71596C22.2404 7.48202 22.311 8.22863 22.4545 8.79902C22.5986 9.37153 22.9283 10.2375 23.8802 10.6318L25.0282 7.86018ZM25.963 6.75468C25.2883 7.30674 24.9132 7.60845 24.6445 7.76913C24.3777 7.92869 24.6292 7.69489 25.0282 7.86018L23.8802 10.6318C24.832 11.0261 25.6775 10.6469 26.1842 10.3439C26.689 10.042 27.2669 9.56407 27.8627 9.07655L25.963 6.75468ZM27.077 5.84324L25.963 6.75468L27.8627 9.07655L28.9767 8.16512L27.077 5.84324ZM29.4851 4.70817C28.8691 4.67745 28.3822 4.90152 28.0303 5.12095C27.7147 5.31773 27.3789 5.59628 27.077 5.84324L28.9767 8.16512C29.1473 8.02554 29.2776 7.91905 29.3911 7.83075C29.5049 7.74215 29.5743 7.69364 29.6176 7.66661C29.6598 7.64028 29.6466 7.65399 29.5922 7.6718C29.5273 7.69304 29.4369 7.7095 29.3356 7.70444L29.4851 4.70817ZM31.7682 6.07722C31.4924 5.80145 31.186 5.49086 30.8915 5.26366C30.5632 5.0103 30.101 4.73889 29.4851 4.70817L29.3356 7.70444C29.2343 7.69939 29.146 7.67402 29.0835 7.64643C29.0312 7.62329 29.0194 7.60834 29.0588 7.63873C29.0992 7.66994 29.1634 7.72512 29.2679 7.8246C29.372 7.92376 29.491 8.04269 29.6469 8.19854L31.7682 6.07722ZM33.9226 8.23158L31.7682 6.07722L29.6469 8.19854L31.8012 10.3529L33.9226 8.23158ZM35.2916 10.5147C35.2609 9.8988 34.9895 9.43657 34.7361 9.10824C34.5089 8.81382 34.1983 8.50735 33.9226 8.23158L31.8012 10.3529C31.9571 10.5088 32.076 10.6278 32.1752 10.7319C32.2747 10.8364 32.3298 10.9006 32.3611 10.941C32.3915 10.9804 32.3765 10.9686 32.3534 10.9163C32.3258 10.8538 32.3004 10.7655 32.2953 10.6642L35.2916 10.5147ZM34.1565 12.9228C34.4035 12.6209 34.6821 12.2851 34.8788 11.9695C35.0983 11.6176 35.3223 11.1307 35.2916 10.5147L32.2953 10.6642C32.2903 10.5629 32.3067 10.4724 32.328 10.4076C32.3458 10.3532 32.3595 10.34 32.3332 10.3822C32.3062 10.4255 32.2576 10.4949 32.169 10.6087C32.0807 10.7222 31.9742 10.8525 31.8347 11.0231L34.1565 12.9228ZM33.2451 14.0368L34.1565 12.9228L31.8347 11.0231L30.9232 12.1371L33.2451 14.0368ZM32.1396 14.9716C32.3049 15.3707 32.0711 15.6221 32.2306 15.3553C32.3913 15.0866 32.693 14.7115 33.2451 14.0368L30.9232 12.1371C30.4357 12.733 29.9577 13.3108 29.6558 13.8156C29.3529 14.3223 28.9737 15.1678 29.3679 16.1197L32.1396 14.9716ZM33.5823 14.8509C32.7148 14.7642 32.2363 14.7123 31.9326 14.636C31.6311 14.5601 31.9743 14.5726 32.1396 14.9716L29.3679 16.1197C29.7622 17.0715 30.6282 17.4013 31.2007 17.5453C31.7711 17.6888 32.5177 17.7595 33.2838 17.8361L33.5823 14.8509ZM35.0146 14.9942L33.5823 14.8509L33.2838 17.8361L34.7161 17.9793L35.0146 14.9942ZM37.52 15.8943C37.1062 15.4371 36.6034 15.2512 36.1994 15.1575C35.8371 15.0735 35.4027 15.033 35.0146 14.9942L34.7161 17.9793C34.9354 18.0012 35.1029 18.0181 35.2455 18.0358C35.3887 18.0537 35.472 18.0684 35.5218 18.08C35.5703 18.0912 35.5512 18.0916 35.5001 18.0657C35.4393 18.0348 35.3637 17.9825 35.2956 17.9073L37.52 15.8943ZM38.1663 18.4768C38.1663 18.0868 38.1693 17.6505 38.1217 17.2816C38.0687 16.8703 37.9338 16.3516 37.52 15.8943L35.2956 17.9073C35.2276 17.8321 35.183 17.7517 35.1584 17.6881C35.1377 17.6347 35.14 17.6158 35.1463 17.6651C35.1529 17.7158 35.1592 17.8002 35.1628 17.9444C35.1663 18.0881 35.1663 18.2564 35.1663 18.4768H38.1663ZM38.1663 21.5235V18.4768H35.1663V21.5235H38.1663ZM37.52 24.106C37.9338 23.6488 38.0687 23.13 38.1217 22.7187C38.1693 22.3499 38.1663 21.9135 38.1663 21.5235H35.1663C35.1663 21.7439 35.1663 21.9122 35.1628 22.0559C35.1592 22.2002 35.1529 22.2846 35.1463 22.3352C35.14 22.3846 35.1377 22.3657 35.1584 22.3123C35.183 22.2486 35.2276 22.1682 35.2956 22.093L37.52 24.106ZM35.0146 25.0062C35.4027 24.9673 35.8371 24.9268 36.1994 24.8428C36.6034 24.7492 37.1062 24.5633 37.52 24.106L35.2956 22.093C35.3637 22.0178 35.4393 21.9655 35.5001 21.9347C35.5512 21.9088 35.5703 21.9091 35.5218 21.9204C35.472 21.9319 35.3887 21.9466 35.2455 21.9645C35.1029 21.9823 34.9354 21.9991 34.7161 22.021L35.0146 25.0062ZM34.8654 25.0136H34.8654V22.0136H34.8654V25.0136ZM33.5829 25.1493L35.0146 25.0062L34.7161 22.021L33.2844 22.1642L33.5829 25.1493ZM32.1402 25.0286C31.9749 25.4277 31.6318 25.4402 31.9333 25.3643C32.2369 25.2879 32.7155 25.2361 33.5829 25.1493L33.2844 22.1642C32.5184 22.2408 31.7718 22.3115 31.2014 22.455C30.6288 22.599 29.7628 22.9287 29.3686 23.8806L32.1402 25.0286ZM33.2457 25.9635C32.6936 25.2887 32.3919 24.9137 32.2312 24.645C32.0717 24.3781 32.3055 24.6296 32.1402 25.0286L29.3686 23.8806C28.9743 24.8324 29.3535 25.678 29.6565 26.1846C29.9583 26.6894 30.4363 27.2673 30.9238 27.8632L33.2457 25.9635ZM34.1566 27.0768L33.2457 25.9635L30.9238 27.8632L31.8348 28.9765L34.1566 27.0768ZM35.2917 29.4849C35.3224 28.8689 35.0983 28.382 34.8789 28.0301C34.6821 27.7145 34.4036 27.3787 34.1566 27.0768L31.8348 28.9765C31.9743 29.1471 32.0808 29.2774 32.1691 29.3909C32.2577 29.5047 32.3062 29.5741 32.3333 29.6174C32.3596 29.6596 32.3459 29.6464 32.3281 29.592C32.3068 29.5271 32.2904 29.4367 32.2954 29.3354L35.2917 29.4849ZM33.9226 31.768C34.1984 31.4922 34.509 31.1858 34.7362 30.8913C34.9896 30.563 35.261 30.1008 35.2917 29.4849L32.2954 29.3354C32.3005 29.2341 32.3258 29.1458 32.3534 29.0833C32.3766 29.031 32.3915 29.0192 32.3611 29.0586C32.3299 29.099 32.2748 29.1632 32.1753 29.2677C32.0761 29.3718 31.9572 29.4908 31.8013 29.6467L33.9226 31.768ZM31.7683 33.9224L33.9226 31.768L31.8013 29.6467L29.647 31.801L31.7683 33.9224ZM31.7683 33.9224L31.7683 33.9224L29.647 31.801L29.647 31.8011L31.7683 33.9224ZM29.4851 35.2914C30.1011 35.2607 30.5633 34.9893 30.8916 34.7359C31.186 34.5087 31.4925 34.1981 31.7683 33.9224L29.647 31.8011C29.4911 31.9569 29.372 32.0758 29.2679 32.175C29.1635 32.2745 29.0993 32.3296 29.0589 32.3609C29.0195 32.3913 29.0313 32.3763 29.0836 32.3532C29.1461 32.3256 29.2344 32.3002 29.3357 32.2951L29.4851 35.2914ZM27.0771 34.1563C27.3789 34.4033 27.7148 34.6819 28.0304 34.8786C28.3823 35.0981 28.8692 35.3221 29.4851 35.2914L29.3357 32.2951C29.437 32.2901 29.5274 32.3065 29.5923 32.3278C29.6467 32.3456 29.6599 32.3593 29.6177 32.333C29.5743 32.306 29.505 32.2574 29.3911 32.1688C29.2777 32.0805 29.1474 31.974 28.9768 31.8345L27.0771 34.1563ZM25.9631 33.2449L27.0771 34.1563L28.9768 31.8345L27.8628 30.923L25.9631 33.2449ZM25.9527 33.2363L25.9527 33.2363L27.8732 30.9316L27.8732 30.9316L25.9527 33.2363ZM25.0283 32.1394C24.6293 32.3047 24.3778 32.0709 24.6446 32.2304C24.9133 32.3911 25.2884 32.6928 25.9631 33.2449L27.8628 30.923C27.267 30.4355 26.6891 29.9575 26.1843 29.6557C25.6776 29.3527 24.8321 28.9735 23.8802 29.3678L25.0283 32.1394ZM25.149 33.5821C25.2357 32.7147 25.2876 32.2361 25.364 31.9325C25.4398 31.631 25.4273 31.9741 25.0283 32.1394L23.8802 29.3678C22.9284 29.762 22.5986 30.628 22.4546 31.2006C22.3111 31.771 22.2405 32.5176 22.1639 33.2836L25.149 33.5821ZM25.0057 35.0151L25.149 33.5821L22.1639 33.2836L22.0206 34.7166L25.0057 35.0151ZM25.0131 34.8659V34.8658H22.0131V34.8659H25.0131ZM24.1055 37.5205C24.5628 37.1067 24.7487 36.6039 24.8423 36.1999C24.9263 35.8376 24.9669 35.4032 25.0057 35.0151L22.0206 34.7166C21.9986 34.9359 21.9818 35.1034 21.964 35.246C21.9462 35.3892 21.9314 35.4725 21.9199 35.5223C21.9086 35.5707 21.9083 35.5517 21.9342 35.5006C21.965 35.4397 22.0173 35.3642 22.0925 35.2961L24.1055 37.5205ZM21.523 38.1668C21.913 38.1668 22.3494 38.1698 22.7182 38.1222C23.1295 38.0692 23.6483 37.9343 24.1055 37.5205L22.0925 35.2961C22.1677 35.228 22.2481 35.1835 22.3118 35.1589C22.3652 35.1382 22.3841 35.1405 22.3347 35.1468C22.2841 35.1534 22.1997 35.1597 22.0555 35.1632C21.9117 35.1667 21.7435 35.1668 21.523 35.1668V38.1668ZM18.4763 38.1668H21.523V35.1668H18.4763V38.1668ZM15.8938 37.5205C16.3511 37.9343 16.8698 38.0692 17.2812 38.1222C17.65 38.1698 18.0863 38.1668 18.4763 38.1668V35.1668C18.2559 35.1668 18.0876 35.1667 17.9439 35.1632C17.7997 35.1597 17.7153 35.1534 17.6646 35.1468C17.6153 35.1405 17.6342 35.1382 17.6876 35.1589C17.7512 35.1835 17.8316 35.228 17.9068 35.2961L15.8938 37.5205ZM14.9937 35.0151C15.0325 35.4032 15.073 35.8376 15.157 36.1999C15.2507 36.6039 15.4366 37.1067 15.8938 37.5205L17.9068 35.2961C17.982 35.3642 18.0344 35.4397 18.0652 35.5006C18.0911 35.5517 18.0907 35.5707 18.0795 35.5223C18.0679 35.4725 18.0532 35.3892 18.0354 35.246C18.0176 35.1033 18.0007 34.9359 17.9788 34.7166L14.9937 35.0151ZM14.8505 33.5828L14.9937 35.0151L17.9788 34.7166L17.8356 33.2843L14.8505 33.5828ZM14.9712 32.1401C14.5721 31.9748 14.5596 31.6316 14.6355 31.9331C14.7119 32.2368 14.7637 32.7153 14.8505 33.5828L17.8356 33.2843C17.759 32.5182 17.6883 31.7716 17.5448 31.2012C17.4008 30.6287 17.0711 29.7627 16.1192 29.3684L14.9712 32.1401ZM14.0363 33.2456C14.7111 32.6935 15.0861 32.3918 15.3548 32.2311C15.6217 32.0716 15.3702 32.3054 14.9712 32.1401L16.1192 29.3684C15.1673 28.9742 14.3218 29.3534 13.8152 29.6563C13.3104 29.9582 12.7325 30.4362 12.1366 30.9237L14.0363 33.2456ZM12.9222 34.1571L14.0363 33.2456L12.1366 30.9237L11.0225 31.8352L12.9222 34.1571ZM10.5142 35.2922C11.1301 35.3229 11.617 35.0988 11.969 34.8794C12.2845 34.6826 12.6204 34.4041 12.9222 34.1571L11.0225 31.8352C10.8519 31.9748 10.7216 32.0813 10.6082 32.1696C10.4943 32.2582 10.425 32.3067 10.3816 32.3337C10.3394 32.3601 10.3526 32.3464 10.407 32.3285C10.4719 32.3073 10.5623 32.2908 10.6636 32.2959L10.5142 35.2922ZM8.23102 33.9231C8.50679 34.1989 8.81326 34.5095 9.10769 34.7367C9.43601 34.99 9.89825 35.2615 10.5142 35.2922L10.6636 32.2959C10.7649 32.301 10.8533 32.3263 10.9157 32.3539C10.9681 32.3771 10.9798 32.392 10.9404 32.3616C10.9 32.3304 10.8358 32.2752 10.7314 32.1757C10.6273 32.0766 10.5082 31.9577 10.3523 31.8018L8.23102 33.9231ZM6.07666 31.7688L8.23102 33.9231L10.3523 31.8018L8.19798 29.6475L6.07666 31.7688ZM4.70761 29.4856C4.73833 30.1015 5.00974 30.5638 5.2631 30.8921C5.4903 31.1865 5.80089 31.493 6.07666 31.7688L8.19798 29.6475C8.04213 29.4916 7.9232 29.3725 7.82405 29.2684C7.72456 29.164 7.66939 29.0998 7.63818 29.0593C7.60778 29.0199 7.62273 29.0317 7.64587 29.0841C7.67346 29.1465 7.69883 29.2349 7.70389 29.3362L4.70761 29.4856ZM5.84269 27.0776C5.59573 27.3794 5.31717 27.7153 5.12039 28.0308C4.90096 28.3827 4.67689 28.8697 4.70761 29.4856L7.70389 29.3362C7.70894 29.4375 7.69249 29.5279 7.67124 29.5928C7.65343 29.6472 7.63972 29.6604 7.66605 29.6182C7.69308 29.5748 7.74159 29.5055 7.83019 29.3916C7.91849 29.2782 8.02499 29.1479 8.16456 28.9773L5.84269 27.0776ZM6.75419 25.9635L5.84269 27.0776L8.16456 28.9773L9.07606 27.8632L6.75419 25.9635ZM7.85968 25.0287C7.6944 24.6297 7.9282 24.3782 7.76864 24.645C7.60796 24.9137 7.30625 25.2888 6.75419 25.9635L9.07606 27.8632C9.56358 27.2674 10.0415 26.6895 10.3434 26.1847C10.6464 25.678 11.0256 24.8325 10.6313 23.8806L7.85968 25.0287ZM6.41696 25.1494C7.28443 25.2361 7.76298 25.288 8.06661 25.3644C8.36811 25.4402 8.02497 25.4277 7.85968 25.0287L10.6313 23.8806C10.2371 22.9288 9.37104 22.5991 8.79853 22.455C8.22814 22.3115 7.48153 22.2409 6.71547 22.1643L6.41696 25.1494ZM4.98475 25.0062L6.41696 25.1494L6.71547 22.1643L5.28326 22.021L4.98475 25.0062ZM5.13398 25.0136H5.134V22.0136H5.13398V25.0136ZM2.47938 24.106C2.89318 24.5633 3.39594 24.7491 3.79993 24.8428C4.16222 24.9268 4.59667 24.9673 4.98472 25.0062L5.28324 22.021C5.06392 21.9991 4.89649 21.9823 4.75383 21.9645C4.61068 21.9466 4.52734 21.9319 4.47757 21.9204C4.4291 21.9091 4.44814 21.9088 4.49921 21.9346C4.5601 21.9655 4.63567 22.0178 4.70374 22.093L2.47938 24.106ZM1.83301 21.5235C1.83301 21.9135 1.83009 22.3499 1.87763 22.7187C1.93064 23.13 2.06557 23.6488 2.47938 24.106L4.70373 22.093C4.7718 22.1682 4.81632 22.2486 4.84096 22.3123C4.86162 22.3657 4.85938 22.3846 4.85302 22.3352C4.84649 22.2846 4.84012 22.2002 4.8366 22.0559C4.8331 21.9122 4.83301 21.7439 4.83301 21.5235H1.83301ZM1.83301 18.4768V21.5235H4.83301V18.4768H1.83301ZM2.47938 15.8943C2.06557 16.3516 1.93064 16.8703 1.87763 17.2816C1.83009 17.6505 1.83301 18.0868 1.83301 18.4768H4.83301C4.83301 18.2564 4.8331 18.0881 4.8366 17.9444C4.84012 17.8002 4.84649 17.7158 4.85302 17.6651C4.85938 17.6158 4.86162 17.6347 4.84096 17.6881C4.81632 17.7517 4.7718 17.8321 4.70373 17.9073L2.47938 15.8943ZM4.98474 14.9942C4.59668 15.033 4.16223 15.0735 3.79994 15.1575C3.39594 15.2512 2.89318 15.4371 2.47938 15.8943L4.70373 17.9073C4.63567 17.9825 4.5601 18.0348 4.49921 18.0657C4.44814 18.0916 4.4291 18.0912 4.47757 18.08C4.52734 18.0684 4.61069 18.0537 4.75383 18.0358C4.8965 18.0181 5.06394 18.0012 5.28326 17.9793L4.98474 14.9942ZM6.41759 14.8509L4.98475 14.9942L5.28326 17.9793L6.71611 17.836L6.41759 14.8509ZM7.86032 14.9716C8.0256 14.5725 8.36874 14.5601 8.06724 14.6359C7.76362 14.7123 7.28507 14.7641 6.41759 14.8509L6.7161 17.836C7.48217 17.7594 8.22877 17.6887 8.79916 17.5452C9.37168 17.4012 10.2377 17.0715 10.632 16.1196L7.86032 14.9716ZM6.75482 14.0368C7.30688 14.7115 7.60859 15.0865 7.76927 15.3553C7.92883 15.6221 7.69503 15.3706 7.86032 14.9716L10.632 16.1196C11.0262 15.1678 10.647 14.3223 10.344 13.8156C10.0422 13.3108 9.56421 12.7329 9.07669 12.137L6.75482 14.0368ZM5.84277 12.922L6.75482 14.0368L9.07669 12.137L8.16464 11.0223L5.84277 12.922ZM4.70769 10.514C4.67697 11.1299 4.90104 11.6168 5.12047 11.9688C5.31725 12.2843 5.59581 12.6202 5.84277 12.922L8.16464 11.0223C8.02506 10.8517 7.91857 10.7214 7.83027 10.608C7.74167 10.4941 7.69316 10.4248 7.66613 10.3814C7.6398 10.3392 7.65351 10.3524 7.67132 10.4068C7.69256 10.4717 7.70902 10.5621 7.70397 10.6634L4.70769 10.514ZM6.07674 8.23082C5.80097 8.50659 5.49038 8.81306 5.26318 9.10749C5.00982 9.43581 4.73841 9.89805 4.70769 10.514L7.70397 10.6634C7.69891 10.7647 7.67354 10.8531 7.64595 10.9155C7.62281 10.9679 7.60786 10.9796 7.63826 10.9402C7.66947 10.8998 7.72464 10.8356 7.82413 10.7312C7.92328 10.6271 8.04221 10.508 8.19806 10.3521L6.07674 8.23082ZM8.2311 6.07646L6.07674 8.23082L8.19806 10.3521L10.3524 8.19778L8.2311 6.07646ZM10.5143 4.70741C9.89833 4.73813 9.43609 5.00954 9.10777 5.2629C8.81334 5.4901 8.50687 5.80069 8.2311 6.07646L10.3524 8.19778C10.5083 8.04193 10.6273 7.923 10.7314 7.82385C10.8359 7.72436 10.9001 7.66919 10.9405 7.63798C10.9799 7.60758 10.9681 7.62253 10.9158 7.64567C10.8533 7.67326 10.765 7.69863 10.6637 7.70369L10.5143 4.70741ZM12.9223 5.84249C12.6205 5.59553 12.2846 5.31697 11.969 5.12019C11.6171 4.90076 11.1302 4.67669 10.5143 4.70741L10.6637 7.70369C10.5624 7.70874 10.472 7.69228 10.4071 7.67104C10.3527 7.65323 10.3395 7.63952 10.3817 7.66585C10.425 7.69288 10.4944 7.74139 10.6082 7.82999C10.7217 7.91829 10.852 8.02478 11.0226 8.16436L12.9223 5.84249ZM14.0364 6.75402L12.9223 5.84249L11.0226 8.16436L12.1367 9.07589L14.0364 6.75402ZM14.9712 7.85952C15.3703 7.69423 15.6217 7.92804 15.3549 7.76848C15.0862 7.60779 14.7111 7.30608 14.0364 6.75402L12.1367 9.07589C12.7325 9.56341 13.3104 10.0414 13.8152 10.3432C14.3219 10.6462 15.1674 11.0254 16.1193 10.6312L14.9712 7.85952ZM14.8505 6.4168C14.7638 7.28427 14.7119 7.76282 14.6355 8.06644C14.5597 8.36794 14.5722 8.02481 14.9712 7.85952L16.1193 10.6312C17.0711 10.2369 17.4009 9.37088 17.5449 8.79836C17.6884 8.22797 17.759 7.48137 17.8357 6.71531L14.8505 6.4168ZM14.9937 4.98523L14.8505 6.41679L17.8357 6.71531L17.9788 5.28374L14.9937 4.98523ZM15.8938 2.47987C15.4366 2.89367 15.2507 3.39643 15.157 3.80043C15.073 4.16272 15.0325 4.59717 14.9937 4.98523L17.9788 5.28374C18.0007 5.06443 18.0176 4.89699 18.0354 4.75432C18.0532 4.61118 18.0679 4.52783 18.0795 4.47806C18.0907 4.42959 18.0911 4.44863 18.0652 4.49969C18.0344 4.56059 17.982 4.63616 17.9068 4.70422L15.8938 2.47987ZM18.4763 1.8335C18.0863 1.8335 17.65 1.83058 17.2812 1.87812C16.8698 1.93113 16.3511 2.06606 15.8938 2.47986L17.9068 4.70422C17.8316 4.77229 17.7512 4.81681 17.6876 4.84145C17.6342 4.86211 17.6153 4.85987 17.6646 4.85351C17.7153 4.84698 17.7997 4.84061 17.9439 4.83709C18.0876 4.83359 18.2559 4.8335 18.4763 4.8335V1.8335ZM21.523 1.8335H18.4763V4.8335H21.523V1.8335ZM24.1055 2.47986C23.6483 2.06606 23.1295 1.93113 22.7182 1.87812C22.3494 1.83058 21.913 1.8335 21.523 1.8335V4.8335C21.7435 4.8335 21.9117 4.83359 22.0555 4.83709C22.1997 4.84061 22.2841 4.84698 22.3347 4.85351C22.3841 4.85987 22.3652 4.86211 22.3118 4.84145C22.2481 4.81681 22.1677 4.77229 22.0925 4.70422L24.1055 2.47986ZM25.0057 4.98521C24.9669 4.59715 24.9263 4.1627 24.8423 3.80042C24.7487 3.39642 24.5628 2.89367 24.1055 2.47986L22.0925 4.70422C22.0173 4.63616 21.965 4.56059 21.9342 4.4997C21.9083 4.44863 21.9086 4.42959 21.9199 4.47806C21.9314 4.52783 21.9462 4.61117 21.964 4.75431C21.9818 4.89698 21.9986 5.06441 22.0206 5.28373L25.0057 4.98521ZM25.1663 20.0002C25.1663 22.8536 22.8531 25.1668 19.9997 25.1668V28.1668C24.51 28.1668 28.1663 24.5105 28.1663 20.0002H25.1663ZM19.9997 14.8335C22.8531 14.8335 25.1663 17.1467 25.1663 20.0002H28.1663C28.1663 15.4898 24.51 11.8335 19.9997 11.8335V14.8335ZM14.833 20.0002C14.833 17.1467 17.1462 14.8335 19.9997 14.8335V11.8335C15.4894 11.8335 11.833 15.4898 11.833 20.0002H14.833ZM19.9997 25.1668C17.1462 25.1668 14.833 22.8536 14.833 20.0002H11.833C11.833 24.5105 15.4894 28.1668 19.9997 28.1668V25.1668Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="mb-16 grid justify-items-center  grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 mx-auto">
        <DashCount
          children={{ item: "Alle Mitarbeiter", count: 100 }}
          style={{ background: "#4269E1" }}
        />
        <DashCount
          children={{ item: "Verfügbar", count: 3 }}
          style={{ background: "#42E148" }}
        />
        <DashCount
          children={{ item: "Inaktiv", count: 8 }}
          style={{ background: "#E14242" }}
        />
        <DashCount
          children={{ item: "Abwesend", count: 2 }}
          style={{ background: "#C142E1" }}
        />
        <DashCount
          children={{ item: "Urlaub", count: 12 }}
          style={{ background: "#42C4E1" }}
        />
      </div>

      <div className="px-32 grid gap-4 gap-y-4">
        <div className="grid justify-items-center gap-y-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <DashLocRed children={{ count: 20563 }} />
          <DashLocGreen children={{ count: 20563 }} />
          <DashLocGreen children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
          <DashLoc children={{ count: 20563 }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
