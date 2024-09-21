import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Head = () => {
  const[bigShoeImg, setBigShoeImg] =useState(bigShoe1);
  return (
    <section id="home"
      className="flex xl:flex-row flex-col justify-center min-h-screen  w-full gap-10 max-container"
    >
      <div className="relative flex flex-col justify-center w-full xl:w-2/5 items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:leading-[82px] font-bold">
          <span className="pr-10 xl:bg-white xl:whitespace-nowrap z-10 relative">
            The New Arrival
          </span>
          <br/>
          <span className="text-coral-red inline-block mt-3">
            Nike
          </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        
        <Button label="Shop now" iconURL={arrowRight}/>

        <div className="flex justify-start item-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index)=>(
           <div key={index}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
           </div> 
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img 
            src={bigShoeImg}
            alt='shoe collection'
            width={610}
            height={502}
            className="object-contain relative z-10"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {
              shoes.map((shoe)=>(
                <div key={shoe}>
                   <ShoeCard
                    imgURL = {shoe}
                    changeBigShoe={(shoe)=>{setBigShoeImg(shoe)}}
                    bigShoeImg ={bigShoeImg}
                   />
                </div>
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default Head