

type CellProps = {
  id:number,
  go:string,
  setGo:React.Dispatch<React.SetStateAction<string>>,
  cells:string[],
  setCells:React.Dispatch<React.SetStateAction<string[]>>,
  cell:string,
  winingMessage:string
}



const Cell = ({go,setGo,cells,id,setCells,cell,winingMessage}: CellProps) => {
 
const handlClick = ()=>{
  if(winingMessage){
    return;
  }
  const NotTaken = !cells[id]
  
  if(NotTaken){
    if (go === 'circle') {
      handleCellChange('circle')
      setGo('cross')
    }else if(go === 'cross'){
      handleCellChange('cross')
      setGo('circle')
    }
  }
}
 const handleCellChange = (cellToChange: string)=>{
   let copyCells = [...cells]
   copyCells[id] = cellToChange
   setCells(copyCells)
 }
 
  return (
    <div className=' rounded-sm border border-slate-950 w-[100px] h-[100px]   box-border  flex justify-center items-center' onClick={handlClick}>
      <div className={` ${cell}
      `} >{cell ? (cell === 'circle' ? 'O' : 'X') : ""}</div>
      
    </div>
  )
}

export default Cell



