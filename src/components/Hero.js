import Image from "next/image"
import heroImage from '../../public/images/svg/horror.svg'

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
            <Image src={heroImage} width={200} height={200} layout='responsive'  alt='Hero Image'/>
        </div>
            <h1 className="text-2xl text-slate-500 uppercase font-bold">Welcome to Watch Me</h1>
            <p className="text-slate-700">Produce Film, Television and Game</p>
                <button className="bg-gray-700 py-3 mt-4 px-6 rounded text-sm text-white">Contact Us</button>
    </div>
  )
}

export default Hero