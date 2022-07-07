import React from "react";
import Typewriter from "typewriter-effect";
import { Navbar } from "../../components/Navbar/Navbar";
const Landing: React.FC<{}> = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto flex justify-center pt-32">
        <p className="text-center text-6xl font-semibold">
          Aprende{" "}
          <span className="font-bold text-cyan-700">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Python ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Java ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Javascript ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Python ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Java ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Javascript ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Python ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Java ❤")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Javascript ❤")
                  .start();
              }}
            />
          </span>
          {/* <span className="text-center text-5xl text-blue-900 font-black">
              HOMES
            </span> */}
          en solo 4 meses
        </p>
      </div>
    </>
  );
};

export default Landing;
