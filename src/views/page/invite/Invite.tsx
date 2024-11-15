import React from 'react'

type Props = {}

const Invite = (props: Props) => {
  const handleClick =()=>{
  }
  return (
    <div>
          <div className="p-2 flex items-center shadow-xl">
      <button className="bg-main-color p-2 w-8 h-8 rounded-full text-white flex items-center justify-center ">
        &lt;
      </button>
      <h1 className="text-center flex-grow font-bold"></h1>
      <button className="bg-main-color p-2 w-20 h-8 rounded-full text-white flex items-center justify-center hover:bg-custom-Purple" onClick={handleClick}>
        Logout
      </button>
    </div>
    </div>
  )
}

export default Invite