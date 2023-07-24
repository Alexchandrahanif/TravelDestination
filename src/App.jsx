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
  bumi,
  cuaca,
  kalender2,
  foto3,
  foto4,
  bintang,
  foto5,
  foto6,
  foto7,
  maps,
  discount,
  kalender,
  foto8,
  bintangemas,
  message,
  facebook,
  twitter,
  instagram,
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
                <button className="w-full h-[50px] rounded-3xl bg-slate-200 gap-4">
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
        <div className=" w-full py-[36px] flex flex-col lg:flex-row-reverse ">
          {/* Bagian 1 */}
          <div className="w-full flex justify-center lg:w-2/3 ">
            <img
              src={foto1}
              alt="foto"
              className="sm:w-[772px] sm:h-[713px] "
            />
          </div>

          {/* Bagian 2 */}
          <div className="w-full flex flex-col justify-center items-center  gap-3 lg:w-1/3 lg:items-start ">
            {/* satu */}
            <div className="shadow-md flex bg-slate-50 py-[20px] px-[30px] rounded-3xl gap-3 ">
              <p className="text-[14px] text-pink font-semibold ">
                Explore The World!
              </p>
              <img src={koper} alt="" />
            </div>
            {/* dua */}
            <div className="w-full text-center lg:text-start">
              <p className="text-[39px] font-bold leading-normal sm:text-[56px]">
                Travel <span className="text-pink">top destination </span>
                of the world
              </p>
            </div>
            {/* tiga */}
            <div className="w-full sm:w-1/2 lg:w-full">
              <p className="text-gray opacity-50  text-center text-base sm:text-[18px] lg:text-start ">
                We always make our customer happy by providing as many choices
                as possible
              </p>
            </div>
            {/* empat */}
            <div className="w-full flex flex-col gap-4 sm:w-3/4 sm:flex-row  justify-center lg:w-full ">
              <div className="shadow-lg bg-ungu flex justify-center sm:w-1/4 w-full items-center py-[17px] rounded-full lg:w-[40%]">
                <p className="shadow-xl text-white font-semibold">
                  Get Started
                </p>
              </div>
              <div className="bg-slate-100 flex justify-center sm:w-1/4 w-full  items-center py-[17px] rounded-full gap-3 lg:w-[40%]  ">
                <img src={play} alt="" />
                <p className=" font-semibold">Watch Demo</p>
              </div>
            </div>
          </div>
        </div>

        {/* SPONSOR */}
        <div className="w-full py-5 gap-5  flex flex-wrap justify-center lg:gap-10">
          <img src={tripadvistor} alt="" className="sm:scale-140 lg:w-[15%]" />
          <img src={boking} alt="" className="sm:scale-140 lg:w-[15%]" />
          <img src={expedia} alt="" className="sm:scale-140 lg:w-[15%]" />
          <img src={airbnb} alt="" className="sm:scale-140 lg:w-[15%]" />
          <img src={rbitz} alt="" className="sm:scale-140 lg:w-[15%]" />
        </div>

        {/* Service */}
        <div className="w-full flex flex-col">
          {/* Bagian 1 */}
          <div className="w-full py-5">
            <p className="text-center text-pink font-semibold mb-5 tracking-widest sm:text-[20px] lg:text-[26px] ">
              SERVICES
            </p>
            <p className="text-[28px]  text-center font-semibold leading-8 sm:text-[40px]">
              Our top value categories for you
            </p>
          </div>
          {/* Bagian 2 */}
          <div className="w-full flex flex-col items-center py-5 gap-5 sm:flex-row sm:justify-center ">
            {/* satu */}
            <div className="w-full py-5 rounded-xl flex justify-center flex-col items-center border-[1px] border-slate-200 gap-4 px-[32px] sm:w-1/3 sm:gap-10 sm:shadow-xl">
              <img src={bumi} alt="bumi" className="w-[64px] h-[64px]" />
              <p className="text-center text-[24px] sm:text-[30px] sm:w-3/4 sm:font-bold">
                Best Tour Guide
              </p>
              <p className="text-center text-[15px] text-grey sm:text-[20px] sm:w-2/3 sm:h-[200px]  ">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>

            {/* dua */}
            <div className="w-full py-5 rounded-xl flex justify-center flex-col items-center border-[1px] border-slate-200 gap-4 px-[32px] sm:w-1/3 sm:gap-10 sm:shadow-xl">
              <img src={cuaca} alt="kalender" className="w-[64px] h-[64px]" />
              <p className="text-center text-[24px] sm:text-[30px] sm:w-3/4 sm:font-bold">
                Easy Booking
              </p>
              <p className="text-center text-[15px] text-grey sm:text-[20px] sm:w-2/3 sm:h-[200px]  ">
                Square, was moving across the sand in their direction.
              </p>
            </div>

            {/* tiga */}
            <div className="w-full py-5 rounded-xl flex justify-center flex-col items-center border-[1px] border-slate-200 gap-4 px-[32px] sm:w-1/3 sm:gap-10 sm:shadow-xl">
              <img src={kalender2} alt="cuaca" className="w-[64px] h-[64px]" />
              <p className="text-center text-[24px] sm:text-[30px] sm:w-3/4 sm:font-bold">
                Weather
              </p>
              <p className="text-center text-15px] text-grey sm:text-[20px] sm:w-2/3 sm:h-[200px]  ">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>
          </div>
        </div>

        {/* DESTINATION */}
        <div className="w-full">
          {/* Bagian 1 */}
          <div className="w-full py-5">
            <p className="text-center text-pink font-semibold mb-5 tracking-widest sm:text-[20px] lg:text-[26px]">
              TOP DESTINATION
            </p>
            <p className="text-[28px] text-center font-semibold leading-8 sm:text-[40px] ">
              Explore top destination
            </p>
          </div>
          {/* Bagian 2 */}
          <div className="w-full flex flex-col flex-wrap py-5 gap-5 sm:flex-row sm:justify-center ">
            {/* Card 1 */}
            <div className="w-full h-[540px] rounded-3xl border-[1px] border-slate-300 sm:w-[31%] ">
              <div className="w-full flex flex-col">
                <img
                  src={foto4}
                  alt="foto"
                  className="w-full h-[314px] object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-5 w-full">
                <div className="w-full">
                  <p className="text-[23px] text-pink font-bold">$550.16</p>
                  <p className="text-[23px] text-dark font-bold mb-4">
                    Paradise Beach, Bantayan Island
                  </p>
                  <p className="text-[18px] text-grey font-normal">
                    Rome, Italy
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[23px] text-oren font-bold">4.8</p>
                  <img src={bintang} alt="" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full h-[540px] rounded-3xl border-[1px] border-slate-300 sm:w-[31%] ">
              <div className="w-full flex flex-col">
                <img
                  src={foto5}
                  alt="foto"
                  className="w-full h-[314px] object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-5 w-full">
                <div className="w-full">
                  <p className="text-[23px] text-pink font-bold">$220.99</p>
                  <p className="text-[23px] text-dark font-bold mb-4">
                    Ocean with full of Colors
                  </p>
                  <p className="text-[18px] text-grey font-normal">Maldives</p>
                </div>
                <div className="flex">
                  <p className="text-[23px] text-oren font-bold">4.5</p>
                  <img src={bintang} alt="" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full h-[540px] rounded-3xl border-[1px] border-slate-300 sm:w-[31%] ">
              <div className="w-full flex flex-col">
                <img
                  src={foto6}
                  alt="foto"
                  className="w-full h-[314px] object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-5 w-full">
                <div className="w-full">
                  <p className="text-[23px] text-pink font-bold">$690.99</p>
                  <p className="text-[23px] text-dark font-bold mb-4">
                    Mountain View, Above the cloud
                  </p>
                  <p className="text-[18px] text-grey font-normal">
                    United Arab Emeries
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[23px] text-oren font-bold">4.9</p>
                  <img src={bintang} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRAVEL POINT */}
        <div className="w-full flex flex-col lg:flex-row">
          {/* Bagian 1 */}
          <div className="w-full py-5 lg:w-[60%]">
            <img src={foto7} alt="" className="w-full" />
          </div>
          {/* Bagian 2 */}

          <div className="lg:w-[40%]">
            <div className="w-full py-5">
              <p className="text-center text-pink font-semibold mb-5 tracking-widest sm:text-[20px] lg:text-[26px] ">
                TRAVEL POINT
              </p>
              <p className="text-[28px] text-center font-semibold  mb-5 sm:text[40px]  lg:text-[50px] lg:text-start">
                We helping you find your dream location
              </p>
              <p className="text-[16px] text-center text-grey sm:text-[16px] lg:text-start lg:text-[20px] ">
                Empowering your wanderlust. We're here to guide you towards your
                dream destination. Unveil new horizons with our travel expertise
              </p>
            </div>
            {/* Bagian 3 */}
            <div className="w-full flex flex-col flex-wrap py-5 gap-5 sm:flex-row sm:justify-center">
              {/* satu */}
              <div className="py-5 border-[1px] border-slate-300 rounded-xl bg-slate-50 sm:w-[48%]">
                <p className="text-[35px] font-bold text-oren text-center">
                  500+
                </p>
                <p className="text-[18px] text-center ">Holiday Package</p>
              </div>
              {/* dua */}
              <div className="py-5 border-[1px] border-slate-300 rounded-xl bg-slate-50 sm:w-[48%]">
                <p className="text-[35px] font-bold text-oren text-center">
                  100
                </p>
                <p className="text-[18px] text-center ">Lexury Hotel</p>
              </div>
              {/* tiga */}
              <div className="py-5 border-[1px] border-slate-300 rounded-xl bg-slate-50 sm:w-[48%]">
                <p className="text-[35px] font-bold text-oren text-center">
                  10+
                </p>
                <p className="text-[18px] text-center ">Premium Airlines</p>
              </div>
              {/* empat */}
              <div className="py-5 border-[1px] border-slate-300 rounded-xl bg-slate-50 sm:w-[48%]">
                <p className="text-[35px] font-bold text-oren text-center">
                  2K+
                </p>
                <p className="text-[18px] text-center ">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="w-full flex flex-col lg:flex-row-reverse">
          {/* Bagian 1 */}
          <div className="w-full py-5 sm:px-20 flex justify-center">
            <img src={foto3} alt="foto3" className="w-full" />
          </div>

          <div>
            {/* Bagian 2 */}
            <div className="w-full py-5">
              <p className="text-center text-pink font-semibold mb-5 tracking-widest sm:text-[20px] lg:text-[26px] lg:text-start ">
                KEY FEATURES
              </p>
              <p className="text-[28px] text-center font-semibold leading-8 mb-5 sm:text-[40px] lg:text-[45px] lg:text-start ">
                We offer best services
              </p>
              <p className="text-[16px] text-center text-grey sm:text-[18px] sm:px-10 lg:text-start lg:px-0 lg:text-[20px] ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>

            {/* Bagian 3 */}
            <div className="w-full flex flex-col items-center py-5 gap-5">
              {/* satu */}
              <div className="w-full py-5 rounded-xl flex justify-center flex-col items-center border-[1px] border-slate-200 gap-4 px-[32px] sm:flex-row sm:justify-start">
                <div>
                  <img src={maps} alt="bumi" className="w-[100px] h-[100px]" />
                </div>
                <div>
                  <p className="text-center text-[24px] sm:text-start sm:text-[30px] sm:font-semibold lg:text-[20px]">
                    We offer best services
                  </p>
                  <p className="text-center text-[15px] text-grey sm:text-[18px] lg:text-start lg:text-[12px]">
                    Unbeatable Service Excellence: Your Ultimate Choice for
                    Top-notch Solutions
                  </p>
                </div>
              </div>

              {/* dua */}
              <div className="w-full py-5 rounded-xl flex justify-center flex-col items-center border-[1px] border-slate-200 gap-4 px-[32px] sm:flex-row sm:justify-start">
                <div>
                  <img
                    src={kalender}
                    alt="kalender"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <div>
                  <p className="text-center text-[24px]  sm:text-start sm:text-[30px] sm:font-semibold lg:text-[20px]">
                    Schedule your trip
                  </p>
                  <p className="text-center text-[15px] text-grey sm:text-[18px] lg:text-start lg:text-[12px]">
                    Plan Your Journey: Secure Your Travel Dates Today!
                  </p>
                </div>
              </div>

              {/* tiga */}
              <div className="w-full py-5 rounded-xl flex justify-center flex-col items-center border-[1px] border-slate-200 gap-4 px-[32px] sm:flex-row sm:justify-start">
                <div>
                  <img
                    src={discount}
                    alt="cuaca"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <div>
                  <p className="text-center text-[24px]  sm:text-start sm:text-[30px] sm:font-semibold  lg:text-[20px]">
                    Get discounted coupons
                  </p>
                  <p className="text-center text-15px] text-grey sm:text-[18px] lg:text-start lg:text-[12px]">
                    Explore Your Dream Destinations, Unmissable Deals on Travel!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="w-full">
          {/* Bagian 1 */}
          <div className="w-full py-5">
            <p className="text-center text-pink font-semibold mb-5 tracking-widest sm:text-[20px] lg:text-[26px]">
              TESTIMONIALS
            </p>
            <p className="text-[28px] text-center font-semibold leading-8 mb-5 sm:text-[40px] ">
              We offer best services
            </p>
          </div>

          {/* Bagian 2 */}
          <div className="py-5 flex justify-center">
            <img src={foto8} alt="" className="sm:w-[128px] sm:h-[128px]" />
          </div>

          {/* Bagian 3 */}
          <div className="w-full flex flex-col justify-center">
            <p className="font-semibold text-oren text-[28px]  text-center sm:text-[32px] ">
              Mark Smith{" "}
              <span className="text-grey text-[18px] sm:text-[22px]">
                / Travel Enthusiast
              </span>
            </p>

            <div className="flex justify-center mt-3">
              <img src={bintangemas} alt="" />
              <img src={bintangemas} alt="" />
              <img src={bintangemas} alt="" />
              <img src={bintangemas} alt="" />
              <img src={bintangemas} alt="" />
            </div>

            <div className="w-full py-8">
              <p className="text-grey text-center text-[16px] sm:text-dark sm:text-[20px] sm:mx-5 ">
                Challenging misconceptions, our roots trace back to classical
                Latin literature from 45 BC, affirming our lasting significance
                in design
              </p>
            </div>
          </div>
        </div>

        {/* SUBCRIBE */}
        <div className="w-full bg-orenmuda rounded-xl">
          {/* Bagian 1 */}
          <div className="w-full py-10 px-5 sm:px-10">
            <p className="text-center text-pink font-semibold mb-5 tracking-widest sm:text-[20px] lg:text-[24px]">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <p className="text-[28px] text-center font-semibold leading-8 mb-14 sm:text-[32px] sm:px-10 ">
              Prepare yourself & let’s explore the beauty of the world
            </p>
            <div className=" w-full flex flex-col sm:flex-row sm:items-center sm:justify-evenly">
              <input
                type="text"
                placeholder={`Your Email`}
                className=" px-5 w-full h-[55px] rounded-xl sm:w-2/3"
              />
              <div className="h-[55px] w-full rounded-xl bg-ungu flex justify-center items-center mt-5 sm:mt-0 sm:m sm:w-[20%] ">
                <p className="text-white">Subscribe</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="w-full">
          {/* Bagian 2 */}
          <div className="w-full py-8 flex flex-col justify-center items-center">
            <img src={logo} alt="logo" />
            <p className="text-grey mt-5 text-center">
              Discover, Plan, and Explore. Unforgettable journeys with exclusive
              deals. Your ultimate travel companion
            </p>
            <div className="flex justify-center w-full gap-5 mt-5">
              <button>
                <img src={facebook} alt="facebook" />
              </button>
              <button>
                <img src={twitter} alt="twitter" />
              </button>
              <button>
                <img src={instagram} alt="instagram" />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
export default App;
