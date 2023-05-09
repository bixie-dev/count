/* eslint-disable */
const Chat = () => {
  return (
    <div>
      <div className="bg-white w-full h-[100px] flex justify-center items-center gap-4 relative">
        <div className="text-[24px] font-[500]">Thomas Peter</div>
        <div>
          <svg
            width="28"
            height="28"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.7455 9.8C24.7455 13.4151 21.8149 16.3457 18.1998 16.3457C14.5848 16.3457 11.6542 13.4151 11.6542 9.8C11.6542 6.18492 14.5848 3.25432 18.1998 3.25432C21.8149 3.25432 24.7455 6.18492 24.7455 9.8ZM22.1098 18.7889C25.5763 17.279 27.9998 13.8225 27.9998 9.8C27.9998 4.38761 23.6122 0 18.1998 0C12.7875 0 8.39985 4.38761 8.39985 9.8C8.39985 13.6398 10.6082 16.9638 13.824 18.5712C7.01426 19.9687 1.67272 25.1693 0.328096 31.7456C0.112827 32.7984 3.09238e-06 33.8865 0 34.9999L3.25432 34.9999H31.7457L35 34.9999C35 33.8865 34.8872 32.7984 34.6719 31.7456C33.3894 25.473 28.4706 20.452 22.1098 18.7889ZM17.5 21.4543C24.2798 21.4543 29.8061 25.9054 31.3287 31.7456H3.6713C5.19387 25.9054 10.7202 21.4543 17.5 21.4543Z"
              fill="#4269E1"
            />
          </svg>
        </div>
        <button className="absolute top-5 right-5 left-auto w-[24px] h-[24px] bg-black rounded-md flex justify-center items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.80078 1.7998L16.2008 16.1998"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16.2008 1.7998L1.80078 16.1998"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-end mt-16 mx-24">
        <div className="p-8 text-white text-[20px] bg-[#4269E1] rounded-[48px] rounded-br-none w-[500px] h-[120px] flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
      </div>
      <div className="flex justify-start mt-16 ml-24">
        <div className="p-2 bg-white rounded-[16px] w-[200px] h-[200px] rounded-bl-none flex justify-center items-center">
          <img
            src={"/assets/images/image1.jpg"}
            alt=""
            className="rounded-[8px]"
          />
        </div>
      </div>
      <div className="mb-12 px-24 fixed bottom-0 w-full">
        <input
          type="text"
          className="relative h-[60px] rounded-[16px] text-[12px] font-[500] pl-4 placeholder:text-slate-400 block bg-white w-full border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          placeholder="Nachricht senden..."
        />
        <button className="absolute top-3 right-28 left-auto w-[36px] h-[36px] bg-black rounded-md flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.375 14.375C6.375 10.6038 6.375 8.71815 7.54657 7.54657C8.71815 6.375 10.6038 6.375 14.375 6.375H36.625C40.3962 6.375 42.2819 6.375 43.4534 7.54657C44.625 8.71815 44.625 10.6038 44.625 14.375V36.625C44.625 40.3962 44.625 42.2819 43.4534 43.4534C42.2819 44.625 40.3962 44.625 36.625 44.625H14.375C10.6038 44.625 8.71815 44.625 7.54657 43.4534C6.375 42.2819 6.375 40.3962 6.375 36.625V14.375Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.625 32.0036L37.8891 27.2677L37.8258 27.2044C37.2138 26.5923 36.6526 26.031 36.1347 25.6358C35.5644 25.2007 34.8741 24.8284 34 24.8284C33.126 24.8284 32.4356 25.2007 31.8653 25.6358C31.3474 26.031 30.7862 26.5923 30.1742 27.2044L30.1109 27.2677L26.5282 30.8505C26.3244 31.0542 26.156 31.2225 26.0073 31.3659C25.9224 31.1775 25.8286 30.9587 25.7151 30.6939L22.831 23.9645L22.7876 23.8632L22.7876 23.8632C22.2978 22.72 21.8657 21.7116 21.4134 20.9763C20.9315 20.1931 20.242 19.4087 19.1123 19.1912C17.9825 18.9736 17.051 19.4458 16.3127 19.994C15.6196 20.5087 14.844 21.2845 13.9646 22.164L13.8867 22.242L8.375 27.7536V31.75L8.49816 31.8731L16.008 24.3633C16.9892 23.382 17.6078 22.769 18.1013 22.4026C18.3338 22.2299 18.4683 22.1672 18.5317 22.1456L18.544 22.1417L18.554 22.1499C18.6049 22.1935 18.7065 22.3017 18.8582 22.5484C19.1803 23.0718 19.527 23.8708 20.0736 25.1463L22.9576 31.8756L22.9923 31.9567C23.2252 32.5005 23.461 33.0511 23.717 33.4673C24.002 33.9304 24.4953 34.5359 25.3645 34.7033C26.2338 34.8707 26.9167 34.4917 27.3533 34.1676C27.7455 33.8763 28.169 33.4526 28.5872 33.0341L28.6495 32.9718L32.2322 29.389C32.9289 28.6924 33.3469 28.2789 33.685 28.0209C33.8399 27.9027 33.9299 27.856 33.9734 27.8378C33.9835 27.8336 33.9905 27.8312 33.9946 27.8299L34 27.8284L34.0054 27.8299C34.0096 27.8312 34.0165 27.8336 34.0266 27.8378C34.0701 27.856 34.1601 27.9027 34.315 28.0209C34.6531 28.2789 35.0711 28.6924 35.7678 29.389L41.4393 35.0606L42.625 33.875V32.0036Z"
              fill="white"
            />
            <circle cx="35.0625" cy="15.9375" r="3.1875" fill="white" />
          </svg>
        </button>
        <button className="absolute top-3 right-40 left-auto w-[36px] h-[36px] bg-[#4269E1] rounded-md flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.1192 10.8803C39.8651 10.96 39.5577 11.0616 39.1793 11.1878L16.1082 18.8782C13.7095 19.6777 12.0611 20.2306 10.9953 20.7491C10.5244 20.9782 10.2818 21.1466 10.1606 21.2499C10.2818 21.3531 10.5244 21.5215 10.9953 21.7506C12.0611 22.2691 13.7095 22.822 16.1082 23.6216L21.9516 25.5694C22.0122 25.5896 22.0733 25.6097 22.1348 25.63C22.8744 25.8737 23.6747 26.1375 24.2684 26.7311C24.8621 27.3248 25.1258 28.1251 25.3696 28.8647C25.3898 28.9263 25.41 28.9874 25.4301 29.0479L27.378 34.8913C28.1775 37.29 28.7304 38.9384 29.2489 40.0042C29.478 40.4752 29.6464 40.7177 29.7497 40.8389C29.8529 40.7177 30.0213 40.4752 30.2504 40.0042C30.7689 38.9384 31.3218 37.29 32.1214 34.8913L39.8117 11.8203C39.9379 11.4418 40.0396 11.1344 40.1192 10.8803ZM41.0292 10.6574C41.0291 10.6575 41.026 10.6577 41.0201 10.6575C41.0264 10.6572 41.0294 10.6573 41.0292 10.6574ZM40.342 9.97944C40.3418 9.97358 40.342 9.97041 40.3421 9.97029C40.3422 9.97017 40.3423 9.9731 40.342 9.97944ZM29.6291 40.9516C29.6291 40.951 29.6339 40.9475 29.6436 40.9434C29.634 40.9502 29.6291 40.9523 29.6291 40.9516ZM29.8558 40.9434C29.8655 40.9476 29.8703 40.951 29.8702 40.9516C29.8702 40.9523 29.8654 40.9502 29.8558 40.9434ZM10.0479 21.1293C10.0486 21.1293 10.052 21.1341 10.0561 21.1438C10.0493 21.1342 10.0473 21.1293 10.0479 21.1293ZM10.0561 21.356C10.052 21.3657 10.0486 21.3705 10.0479 21.3704C10.0473 21.3704 10.0493 21.3656 10.0561 21.356ZM40.3596 7.72167C40.9518 7.61632 41.9255 7.55241 42.6863 8.31324C43.4471 9.07407 43.3832 10.0477 43.2779 10.6399C43.175 11.2184 42.938 11.9288 42.6895 12.6737L42.6578 12.7689L34.9674 35.84L34.9287 35.9561C34.1772 38.2109 33.5639 40.0508 32.9482 41.3166C32.3832 42.478 31.4614 43.9253 29.7497 43.9253C28.038 43.9253 27.1162 42.478 26.5512 41.3166C25.9354 40.0508 25.3222 38.2109 24.5706 35.9562L24.5319 35.84L22.5841 29.9966C22.4207 29.5065 22.3274 29.2307 22.2406 29.031C22.2018 28.9418 22.1757 28.8954 22.1613 28.8726C22.1545 28.8618 22.1504 28.8565 22.149 28.8547L22.1471 28.8525L22.1448 28.8505C22.1431 28.8491 22.1377 28.845 22.127 28.8382C22.1041 28.8238 22.0577 28.7977 21.9685 28.7589C21.7688 28.6721 21.4931 28.5788 21.003 28.4154L15.1595 26.4676L15.0434 26.4289C12.7887 25.6774 10.9487 25.0641 9.68294 24.4484C8.52156 23.8834 7.07422 22.9616 7.07422 21.2499C7.07422 19.5382 8.52156 18.6164 9.68294 18.0514C10.9487 17.4356 12.7886 16.8223 15.0434 16.0708L15.1595 16.0321L38.2306 8.34175C38.2624 8.33115 38.2941 8.32056 38.3258 8.31C39.0707 8.06153 39.7811 7.82458 40.3596 7.72167Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
