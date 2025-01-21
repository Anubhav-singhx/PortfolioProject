import Globe from "react-globe.gl"
import Nbutton from "../components/Nbutton"
import { useState } from "react"

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy=()=>{
    navigator.clipboard.writeText('iamasingh96@gmail.com')
    setHasCopied(true)
  }
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-col-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex items-center justify-center">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>

              <p className="grid-headtext">Hi, I am Anubhav</p>
              <p className="grid-subtext">With 2 Years of Experience , I have Honed my skills in frontend and backend development, with a focus on animated 3D webistes</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex justify-center items-center">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full  object-contain h-fit" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in Javascript/TypeScript with a Focus on React and Nextjs Ecosystems</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex justify-center items-center">
            <div className="rounded-3xl w-full sm:h-[326px]: h-fit flex items-center justify-center">
              <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"} bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[{
                lat: 28.7041, lng: 77.1025, text: "I am Here!", size: 1000,
              }]} />
            </div>
            <div>
              <p className="grid-headtext">I workly remotely Across Most Time zones</p>
              <p className="grid-subtext">I am Based in India with remote work Available</p>
              <Nbutton name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
        <div className="grid-container">
        <img src="/assets/grid3.png" alt="grid-3" className="w-full" />
        <div>
          <p className="grid-headtext">My Passion For coding</p>
          <p className="grid-subtext">I love solving problems and building things with coding is not my profession - it is my passion.</p>
        </div>
        </div> 

        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied?'/assets/tick.svg':'/assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">iamasingh96@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
