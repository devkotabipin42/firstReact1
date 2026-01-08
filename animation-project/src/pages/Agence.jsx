import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const imageArray=[
  'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
  'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
  'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
  'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
  'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
  'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
  'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'

]

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
       trigger:imageDivRef.current,
       markers:true,
       start:'top 40%',
       end:'top -70%',
       scrub:true,
       pin:true,
       onUpdate:function(elem){
        let imageIndex 
        if(elem.progress<1){
        imageIndex = Math.floor(elem.progress*imageArray.length)
       }else{
        imageIndex=imageArray.length-1
       }
        imageRef.current.src = imageArray[imageIndex]
        
       }
      }
    })
  })
  return (
    <div>
    <div className="section-1">
      <div ref={imageDivRef} className=" h-[35vw] w-[28vw] overflow-hidden rounded-4xl  w-[15vw] absolute top-60 left-[38vw]">
        <img ref={imageRef} className="h-full object-cover w-full" src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="" />
      </div>
      <div className="relative">
        <div>
          <h1 className="text-[19vw] text-center leading-[17vw] mt-60">
            Soixan7th <br />
            Twelve
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="text-6xl w-[60%] mt-20">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Our curiosity fuels our creativity. We remain humble and say no to
            big egos, even yours. A brand is alive. She has values, a
            personality, a history. If we forget that, we can make good numbers
            in the short term, but we kill it in the long term. This is why we
            are committed to giving perspective, to building influential brands
          </p>
        </div>
        <div className="flex ml-12 p-20 text-2xl gap-[13vw]  pt-[210px]  ">
          <p>Expertise</p>
          <p className="">
            Strategy <br />
            Advertisement <br />
            Branding <br />
            Design <br />
            Content
          </p>
        </div>
        <div className="flex p-30 text-2xl justify-around gap-9">
          <p>
            Our projects_ are born in humility, grow in curiosity and live
            thanks to creativity in all its forms.
          </p>
          <p>
            Our creation_ is bubbling in an environment where talent wants to
            explode. Where you feel free to be the best version of yourself.
          </p>
          <p>
            Our culture_ is openness to others. Point. The entire crew helps
            build an agency that we are proud of.
          </p>
        </div>
      </div>
    </div>
    <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
