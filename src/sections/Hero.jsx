import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, items } from "../constants";
import { useState } from "react";
import { bigitem1 } from "../assets/images";
import ProductCard from "../components/ProductCard";
const Hero = () => {
  const [bigitemImg, setBigitemImg] = useState(bigitem1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-transparant xl:whitespace-nowrap relative z-10 pr-10">
            Furniture store
          </span>
        </h1>
        <p className="font-montserratt text-slate-100 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Choose novelties for your interior and find out what interesting
          things have been added to our new collection!
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center  items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigitemImg}
          alt="item colletion"
          width={610}
          className=" lg:h-96  object-contain box-border relative z-10 overflow-hidden"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {items.map((image, index) => (
            <div key={index}>
              <ProductCard
                index={index}
                imgURL={image}
                changeBigitemImage={(item) => {
                  setBigitemImg(item);
                }}
                bigitemImg={bigitemImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
