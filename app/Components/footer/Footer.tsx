import Link from "next/link";


export default function Footer(){
    return(
        <div className=" h-10 border-t border-t-white/30
        footer text-white flex justify-center items-center">
            <p> <Link className=" text-[#8b0000] font-bold hover:animate-pulse hover:text-yellow-500 hover:duration-500" href={'https://github.com/nasrokamora'}>Nas@Dev</Link> Copyright © 2024. All Rights Reserved.</p>
        </div>
    )
}