import React from "react";
import "./App.css";
import { useLayoutEffect } from "react";
// import photo1 from "./img1.jpg";
// import video1 from "./video1.mp4";
import first from "./assets/FIRST.mp4";
import second from "./assets/Second.mp4"
import third from "./assets/Third.mp4";
import fifth from "./assets/Fifth.mp4";
import sixth from "./assets/Sixth.mp4";
import seventh from "./assets/Seventh (2).mp4";
import poster from "./assets/poster.jpg";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
    
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- selecting all horizontal sections
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      // ---------- applying horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease:"",
        scrollBehavior: "smooth",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          // snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="overflow-hidden frame">
      {/* //Scrollable */}
      <main id="container" className="select-none">
        <section className="horizontal-section bg-[#242424] text-white">

          <video
            className="lg:w-1/2"
            loading="lazy"
            autoPlay
            loop
            muted
            disablePictureInPicture
          >
            <source loading="lazy" src={first} type="video/mp4" />
          </video>
          <div className="leading-8 max-w-sm">
            <h2 className="text-wrap lg:text-7xl sm:text-5xl">
              We Seek. We question. We explore.
            </h2>
          </div>
        </section>

        <section className="horizontal-section bg-[rgb(48,48,48)] text-white">
          <video
            className="lg:w-1/2"
            loading="lazy"
            autoPlay
            loop
            muted
            disablePictureInPicture
          >
            <source loading="lazy" src={second} type="video/mp4" />
          </video>
          {/* <img src={photo2} className="h-36" alt="" /> */}
          <div className="leading-8 max-w-sm">
            <h2 className="text-wrap lg:text-7xl sm:text-5xl ">
              In the silence, we find answers.
            </h2>
          </div>
        </section>

        <section className="horizontal-section bg-[#2a2b2b] text-white">
          <video
            className="lg:w-1/2"
            loading="lazy"
            autoPlay
            loop
            muted
            disablePictureInPicture
          >
            <source loading="lazy" src={third} type="video/mp4" />
          </video>
          {/* <img src={photo1} className="h-36" alt="" /> */}
          <div className="leading-8 max-w-sm">
            <h2 className="text-wrap lg:text-7xl sm:text-5xl">
              We discover. We understand. We unite.
            </h2>
          </div>
        </section>
      </main>

      <section className="flex h-screen md:flex-row sm:flex-col justify-around items-center  select-none text-white bg-black text-center">
        <div className="">
          <h2 id="special" className="text-wrap special">
            Boundaries <span className="fade">dissolve.</span> Differences{" "}
            <span className="fade">fade.</span>
          </h2>
        </div>
      </section>

      <section className="side select-none">
        {/* <img src={fifth} loading="lazy" className="lg:w-1/2 rounded-2xl" alt="" /> */}
        <video
            className="lg:w-1/2 rounded-2xl border border-slate-500"
            loading="lazy"
            autoPlay
            loop
            muted
            disablePictureInPicture
          >
            <source loading="lazy" src={fifth} type="video/mp4" />
          </video>
        <div className="px-1 pt-4 max-w-sm">
          <h2 className="text-wrap lg:text-7xl sm:text-4xl text-white">
            In the stillness, we see truth.
          </h2>
        </div>
      </section>

      <div className="side side2 select-none">
        <div className="px-1 pt-4 max-w-sm">
          <h2 className="text-wrap lg:text-7xl sm:text-4xl text-white">
            Feel the connection. Embrace the unity.
          </h2>
        </div>
        <video
            className="lg:w-1/2 rounded-2xl border border-slate-500"
            loading="lazy"
            autoPlay
            loop
            muted
            disablePictureInPicture
          >
            <source loading="lazy" src={sixth} type="video/mp4" />
          </video>
      </div>

      <div className="items-center select-none bg-black text-white w-screen align-middle justify-items-center">
        <Marquee
          direction="left"
          gradient
          gradientColor="black"
          speed={200}
          gradientWidth={50}
          autoFill
          scrollBehavior="smooth"
          className="marquee"
        >
          <span className="fade pl-48"> We are not separate. We are </span>
          &nbsp;One.
        </Marquee>
      </div>

     <div className="bgContent relative select-none mt-8">
      <video className=" relative" loading="lazy" src={seventh} autoPlay muted disablePictureInPicture loop></video>
      <h2 className="absolute lg:px-3">Our true essence is not in <span className="line-through opacity-70">division</span>,But in realizing the oneness of all</h2>
     </div>

     <div className="bgContent2 select-none">
      <img className="relative" loading="lazy" src={poster} alt="" ></img>
      <div className="absolute">
      <h2 >In the end,</h2> 
      <h2 >there is only...</h2>
      </div>
     </div>

      <div className="flex justify-center align-middle select-none m-20">
        <a
          href="https://catalyst.geca.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-5 text-2xl border border-white rounded-2xl text-white">
            See magazine
          </button>
        </a>
      </div>

      <div>
        <h2 className="text-white text-lg mb-4 text-center">Made with ❤️ by TEAM CATALYST.</h2>
      </div>
    </div>
  </>
  );
};

export default Card;
