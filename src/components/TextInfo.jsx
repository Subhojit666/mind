import {IoMdCheckmarkCircle} from 'react-icons/io';

function TextInfo({name}) {
  return (
    <span className='flex items-center gap-2 text-[#66748a] text-xs md:text-sm'><IoMdCheckmarkCircle size={20} className='text-[#4CA154]' /> {name}</span>
  )
}

export default TextInfo