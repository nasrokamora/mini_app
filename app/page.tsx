import Image from "next/image";
import Play from "./play/page";
import Link from "next/link";
import tic from '@/public/tictactoe.png'
import nas_dev from '@/public/nas_dev.png'

import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md"
export default function Home() {
    return (
        <div className=" text-white p-10 w-full h-screen ">
            <div className="">
                <Image className=" " src={nas_dev} width={50} height={50} alt="image" />
            </div>

            <div className="">
                <div className="  flex justify-center text-[7vw] font-bold">
                    <h1 className="tt bg-gradient-to-tr from-yellow-500 to-red-500 bg-clip-text text-transparent ">Tic Tac Toe</h1>
                </div>

                <div className="btn flex justify-center items-center mt-20 ">
                    <Link className=" border-2 w-[15rem] h-15 border-white/30 rounded-md flex justify-center items-center backdrop-blur-sm
                bg-white/30 text-[2rem] text-slate-900 font-bold animate-pulse
                hover:bg-white/10 hover:transition-all hover:duration-300 hover:text-yellow-500 
                " href={"/play"}>Play Game</Link>
                </div>

            </div>
            <div className=" flex justify-center items-end">


                <div className=" ml-3 p-4 gap-5
 flex justify-center    bg-white/30 backdrop-blur-sm  mt-10 w-fit  border-white/30 rounded-md">
                    <Link title="linkedin/nasdev" href={'https://www.linkedin.com/in/nasdev/'}>
                        <FaLinkedinIn size={20} />
                    </Link>
                    <Link title="github/nas@dev" href={'https://github.com/nas@dev'}>
                        <FaGithub size={20} />
                    </Link>
                    <Link title="Email/nasreddine_ab" href={'https://outlook.fr/nasreddine_Ab'}>
                        <MdAlternateEmail size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}