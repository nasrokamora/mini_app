"use client"
import nas_dev from '@/public/nas_dev.png'
import Image from "next/image";
import { useEffect, useState } from "react"
import Cell from '../Components/Cell/Cell'
import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";
import { MdConnectWithoutContact } from "react-icons/md";



const comboWinning = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
export default function Play() {
  const [cells,setCells] = useState(["","","","","","","","",""])
  const [go,setGo] = useState('circle')
  const [winnigMessage,setWinnigMessage] = useState('')


  const handleReset = ()=>{
    setCells(["","","","","","","","",""])
    setGo('circle')
    setWinnigMessage('')
  }


  useEffect(()=>{
    comboWinning.forEach((combo)=>{
      const cellsCircle = combo.every((cell) => cells[cell] === "circle")
      const cellsCross = combo.every((cell) => cells[cell] === "cross")
      if(cellsCircle){
        setWinnigMessage('Circle Wins !')
      }else if(cellsCross){
        setWinnigMessage('Cross Wins !')
      }
    })
  },[cells])

  useEffect(()=>{
    if (cells.every((cell) => cell !== "") && !winnigMessage) {
      setWinnigMessage('Draw ! ')
    }
  },[cells,winnigMessage])

  return (

    <main className=" ">
            <div className="  text-white m-5  ">

<Image className=" animate-pulse " src={nas_dev} width={100} height={100} alt="image" />
<div className=' flex justify-center '>
      <div className=' flex justify-center items-center gap-16
        bg-white/30 backdrop-blur-sm rounded-full w-fit p-4  lg:hidden '>
        <h1><MdConnectWithoutContact size={30} /></h1>

        <Link href={'https://www.linkedin.com/in/nasdev/'}><CiLinkedin size={30} /></Link>
        <Link href={'https://github.com/nasrokamora'}><SlSocialGithub size={30} /></Link>
      </div>
      </div>
</div>
      <div className='flex-col   h-screen flex justify-start items-center'> 

      <div className=' bg-white/30 backdrop-blur-md  shadow-md shadow-slate-950 rounded-sm  text-white w-[302px] h-[300px] border  flex flex-wrap  border-slate-800'> 
      {cells.map((cell,index)=>(
        
        <Cell  
        key={index} 
        id={index}
        go={go} 
        setGo={setGo} 
        cells={cells}
        setCells={setCells}
        cell={cell} 
        winingMessage={winnigMessage}/> 
        ))}
      </div>
      
      <div className="yy text-yellow-500 font-bold text-3xl pt-5">
         {winnigMessage} 
         </div>

      { !winnigMessage && <div className=" cc text-cyan-500 font-bold text-3xl pt-5"> {`Its now ${go}'s turn`} </div>}

        <div className=" text-white text-[2rem] flex justify-between items-center mt-5">
          <button className=" transition duration-700 hover:border-yellow-500 hover:bg-slate-950 hover:text-yellow-500 border border-cyan-950  rounded-md p-1" type="reset" onClick={handleReset}>New Game</button>
        </div>
        </div>
    </main>
  )
}
