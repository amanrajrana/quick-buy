import { Button } from "../components/UI/button";

function Hero() {
  return (
    <div className="w-full my-8 px-2">
      <div className="container relative h-[658px]  min-h-max">
        <img
          src="/img/banner-1.png"
          alt="banner"
          className="w-full h-full object-cover rounded-3xl absolute top-0 left-0 -z-10"
        />
        <div className="w-full h-full flex flex-col justify-center text-white gap-y-6">
          <div className="text-2xl sm:text-3xl uppercase">
            Sale up to 20% off
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold drop-shadow">
            Apple Watch Ultra 2
          </h2>
          <p className="sm:text-2xl font-light max-w-screen-sm">
            The most rugged and capable Apple Watch pushes the limits again.
            Featuring the all-new S9 SiP.
          </p>
          <div className="flex gap-x-4">
            <Button>Shop Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
