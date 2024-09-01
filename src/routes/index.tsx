import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <>
      <div class="flex h-screen max-w-screen-2xl flex-col border">
        <AppBar />
        <NavAndContent />
      </div>
    </>
  );
}

function NavAccount() {
  return (
    <>
      <div class="flex w-64 flex-col items-start gap-4 self-stretch p-4">
        <div class="flex flex-col items-center justify-center gap-4 self-stretch border p-3">
          <div class="flex flex-col items-start gap-0.5">
            <div class="font-newgrotesk text-base font-semibold not-italic">
              Hi Bruce
            </div>
            <div class="font-newgrotesk text-xs font-normal not-italic">
              Welcome Back!
            </div>
          </div>
          <div class="flex items-start gap-2 self-stretch">
            <button
              type="button"
              class="font-newgrotesk flex h-8 flex-1 flex-col items-center justify-center gap-2 rounded-sm bg-orange-500 px-0 py-3 text-sm font-medium text-slate-50"
            >
              Buy
            </button>
            <button
              type="button"
              class="font-newgrotesk flex h-8 flex-1 flex-col items-center justify-center gap-2 rounded-sm bg-orange-500 px-0 py-3 text-sm font-medium text-slate-50"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Nav() {
  return (
    <>
      <div class="h-full border-r">
        <NavAccount />
      </div>
    </>
  );
}


function Content() {
  return (
    <>
      <div class="flex h-96 w-full flex-1 flex-col items-center">
        {/* <ClientOnly fallback={<p>loading</p>}>
          {() => <MyResponsiveLine />}
        </ClientOnly> */}
        {/* <Suspense fallback={<p>suspense</p>}>
          <MyResponsiveLine />
        </Suspense> */}
      </div>
    </>
  );
}

function NavAndContent() {
  return (
    <>
      <div class="flex max-h-screen items-start self-stretch">
        <Nav />
        <Content />
      </div>
    </>
  );
}

function IconMenuOpen() {
  return (
    <>
      <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-2.5 rounded-sm p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.33333 15C3.09722 15 2.89931 14.9201 2.73958 14.7604C2.57986 14.6007 2.5 14.4028 2.5 14.1667C2.5 13.9306 2.57986 13.7326 2.73958 13.5729C2.89931 13.4132 3.09722 13.3333 3.33333 13.3333H12.5C12.7361 13.3333 12.934 13.4132 13.0938 13.5729C13.2535 13.7326 13.3333 13.9306 13.3333 14.1667C13.3333 14.4028 13.2535 14.6007 13.0938 14.7604C12.934 14.9201 12.7361 15 12.5 15H3.33333ZM15.75 13.5833L12.75 10.5833C12.5833 10.4167 12.5 10.2222 12.5 10C12.5 9.77778 12.5833 9.58333 12.75 9.41667L15.75 6.41667C15.9028 6.26389 16.0972 6.1875 16.3333 6.1875C16.5694 6.1875 16.7639 6.26389 16.9167 6.41667C17.0694 6.56944 17.1458 6.76389 17.1458 7C17.1458 7.23611 17.0694 7.43056 16.9167 7.58333L14.5 10L16.9167 12.4167C17.0694 12.5694 17.1458 12.7639 17.1458 13C17.1458 13.2361 17.0694 13.4306 16.9167 13.5833C16.7639 13.7361 16.5694 13.8125 16.3333 13.8125C16.0972 13.8125 15.9028 13.7361 15.75 13.5833ZM3.33333 10.8333C3.09722 10.8333 2.89931 10.7535 2.73958 10.5938C2.57986 10.434 2.5 10.2361 2.5 10C2.5 9.76389 2.57986 9.56597 2.73958 9.40625C2.89931 9.24653 3.09722 9.16667 3.33333 9.16667H10C10.2361 9.16667 10.434 9.24653 10.5938 9.40625C10.7535 9.56597 10.8333 9.76389 10.8333 10C10.8333 10.2361 10.7535 10.434 10.5938 10.5938C10.434 10.7535 10.2361 10.8333 10 10.8333H3.33333ZM3.33333 6.66667C3.09722 6.66667 2.89931 6.58681 2.73958 6.42708C2.57986 6.26736 2.5 6.06944 2.5 5.83333C2.5 5.59722 2.57986 5.39931 2.73958 5.23958C2.89931 5.07986 3.09722 5 3.33333 5H12.5C12.7361 5 12.934 5.07986 13.0938 5.23958C13.2535 5.39931 13.3333 5.59722 13.3333 5.83333C13.3333 6.06944 13.2535 6.26736 13.0938 6.42708C12.934 6.58681 12.7361 6.66667 12.5 6.66667H3.33333Z"
            fill="#7C8B9C"
          />
        </svg>
      </div>
    </>
  );
}

function LogoForge() {
  return (
    <>
      <div class="h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="24"
          viewBox="0 0 88 24"
          fill="none"
        >
          <g clip-path="url(#clip0_3945_27209)">
            <path
              d="M0 11.5652H17.5086V7.22237H10.6514L11.7486 4.34237H17.5086V-0.000488281H8.73143L5.98857 7.22237H0V11.5652Z"
              fill="#F26722"
            />
            <path
              d="M1.69143 18.6052H6.30857L7.95429 14.2624H3.33714L1.69143 18.6052Z"
              fill="#F26722"
            />
            <path
              d="M27.3824 7.22237H35.8395V9.8738H27.3824V18.6509H24.3652V-0.000488281H36.8909V2.65094H27.3824V7.22237Z"
              fill="#333D46"
            />
            <path
              d="M36.2967 11.8395C36.2967 7.49666 38.9024 4.70808 43.1538 4.70808C47.4052 4.70808 50.0109 7.45094 50.0109 11.8395C50.0109 16.1824 47.4052 18.9709 43.1538 18.9709C38.9024 18.9709 36.2967 16.1367 36.2967 11.8395ZM47.0395 11.8395C47.0395 8.77666 45.6224 7.03951 43.1538 7.03951C40.6852 7.03951 39.2681 8.77666 39.2681 11.8395C39.2681 14.9024 40.6852 16.6395 43.1538 16.6395C45.6224 16.6395 47.0395 14.8567 47.0395 11.8395Z"
              fill="#333D46"
            />
            <path
              d="M58.6052 4.93666V7.77094C58.2852 7.72523 57.9652 7.67951 57.5995 7.67951C53.9424 7.67951 53.8967 10.8795 53.8967 12.7995V18.6052H50.9709V4.98237H53.851V7.26808C54.6281 5.7138 55.9081 4.84523 57.7367 4.84523C58.0567 4.84523 58.3309 4.89094 58.6052 4.93666Z"
              fill="#333D46"
            />
            <path
              d="M72.2281 18.2852C72.2281 21.6681 70.0338 23.9995 65.6909 23.9995C61.9424 23.9995 59.7481 22.2624 59.3824 19.5652H62.3081C62.7195 21.0281 63.9081 21.7138 65.6909 21.7138C68.1595 21.7138 69.3024 20.4795 69.3024 18.2852V16.1367C68.4338 17.5081 67.0167 18.4681 64.7767 18.4681C61.2109 18.4681 58.6967 15.9538 58.6967 11.5652C58.6967 7.22237 61.2109 4.70808 64.7767 4.70808C67.0167 4.70808 68.4338 5.66808 69.3024 6.9938V4.98237H72.2281V18.2852ZM69.4395 11.5652C69.4395 8.86808 68.0224 6.9938 65.5081 6.9938C62.9938 6.9938 61.6681 8.95951 61.6681 11.5652C61.6681 14.2167 62.9938 16.1367 65.5081 16.1367C68.0224 16.1367 69.4395 14.2624 69.4395 11.5652Z"
              fill="#333D46"
            />
            <path
              d="M87.0395 12.5709H76.2509C76.5252 15.0852 77.9881 16.6395 80.3195 16.6395C82.3309 16.6395 83.6109 15.5424 84.0224 14.0795H86.9938C86.3538 17.2338 83.7938 18.9252 80.3195 18.9252C75.8852 18.9252 73.2795 16.0452 73.2795 11.7938C73.2795 7.54237 76.0224 4.66237 80.3195 4.66237C84.7538 4.70809 87.3138 7.81665 87.0395 12.5709ZM84.0681 10.5595C83.9309 8.68523 82.7424 6.94809 80.2738 6.94809C78.0795 6.94809 76.7081 8.2738 76.3881 10.5595H84.0681Z"
              fill="#333D46"
            />
          </g>
          <defs>
            <clipPath id="clip0_3945_27209">
              <rect width="87.0602" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}

function AppBar() {
  return (
    <>
      <div class="flex items-start self-stretch">
        <div class="flex h-16 flex-1 items-center justify-between border-b py-3 pl-3 pr-6">
          <div class="flex flex-1 items-center justify-between self-stretch">
            <div class="flex items-center gap-6">
              <div class="flex items-center gap-2">
                <div class="flex items-start">
                  <IconMenuOpen />
                </div>
                <div class="pl-2">
                  <LogoForge />
                </div>
                <div>
                  {/* <CompanySearch /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
