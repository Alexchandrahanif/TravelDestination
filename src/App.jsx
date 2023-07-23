import {
  foto1,
  hamburger,
  koper,
  logo,
  play,
  airbnb,
  boking,
  expedia,
  rbitz,
  tripadvistor,
} from "./assets/logo";

function App() {
  return (
    <>
      <div className="px-[16px] sm:px-[64px]">
        {/* NAVBAR */}
        <nav>
          <div className="h-[112px] flex justify-between items-center ">
            <img
              src={logo}
              alt="logo"
              className="w-[142px] h-[40px] order-1 sm:order-2 lg:order-1"
            />
            <img
              src={hamburger}
              alt="hamburger"
              className="w-[48px] h-[48px] order-2 sm:order-1 lg:hidden"
            />
            <div className="lg:flex order-2 w-1/3 items-center hidden">
              <ul className="flex justify-between w-full">
                <li className="hover:text-ungu ">Home</li>
                <li className="hover:text-ungu ">Discover</li>
                <li className="hover:text-ungu ">Special Deals</li>
                <li className="hover:text-ungu ">Contant</li>
              </ul>
            </div>
            <div className="w-[220px] sm:flex gap-1 hidden order-3">
              <div className="w-1/2">
                <button className="w-full h-[50px] rounded-3xl bg-slate-200">
                  Login
                </button>
              </div>
              <div className="w-1/2">
                <button className="w-full h-[50px] rounded-3xl text-sm bg-ungu text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* HERO */}
        </nav>
        {/* Hero */}
        <div className=" w-full py-[36px] ">
          {/* Bagian 1 */}
          <div className="w-full flex justify-center ">
            <img
              src={foto1}
              alt="foto"
              className="sm:w-[772px] sm:h-[713px] "
            />
          </div>

          {/* Bagian 2 */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            {/* satu */}
            <div className="shadow-md  flex bg-slate-50 py-[20px] px-[30px] rounded-3xl gap-3 ">
              <p className="text-[14px] text-pink font-semibold">
                Explore The World!
              </p>
              <img src={koper} alt="" />
            </div>
            {/* dua */}
            <div className="w-full text-center">
              <p className="text-[39px] font-bold">
                Travel <span className="text-pink">top destination </span>
                of the world
              </p>
            </div>
            {/* tiga */}
            <div>
              <p className="text-gray opacity-50  text-center text-base">
                We always make our customer happy by providing as many choices
                as possible
              </p>
            </div>
            {/* empat */}
            <div className="w-full flex flex-col gap-4">
              <div className="shadow-lg bg-ungu flex justify-center items-center py-[17px] rounded-full">
                <p className="shadow-lg text-white font-semibold">
                  Get Started
                </p>
              </div>
              <div className="bg-slate-50 flex justify-center items-center py-[17px] rounded-full gap-3">
                <img src={play} alt="" />
                <p className=" font-semibold">Watch Demo</p>
              </div>
            </div>
          </div>
        </div>

        {/* SPONSOR */}
        <div className="w-full py-5 gap-5  flex flex-wrap justify-center">
          <img src={tripadvistor} alt="" />
          <img src={boking} alt="" />
          <img src={expedia} alt="" />
          <img src={airbnb} alt="" />
          <img src={rbitz} alt="" />
        </div>

        {/* Service */}
      </div>
    </>
  );
}
export default App;
