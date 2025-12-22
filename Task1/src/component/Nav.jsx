const Nav = () => {
  return (
    <div className="h-[10vh] w-[88%] bg-black flex justify-between p-1 mt-15 ml-17 rounded-t-lg text-[10px]">
      <h1 className="p-2 text-2xl">DVSY</h1>
      <div className="flex gap-6 justify-between p-2">
          <p className="h-7 w- bg-[#24221d] p-2 flex justify-center items-center rounded-[3px]">DESIGNERS</p>
          <p className="h-7 w- bg-[#24221d] p-2 flex justify-center items-center rounded-[3px]">COLLAB</p>
          <p className="h-7 w- bg-[#24221d] p-2 flex justify-center items-center rounded-[3px]">EVENTS</p>
          <p className="h-7 w- bg-[#24221d] p-2 flex justify-center items-center rounded-[3px]">BLOG</p>
          <p className="h-7 w- bg-[#24221d] p-2 flex justify-center items-center rounded-[3px]">CARD</p>
          <p className="h-7 w- bg-amber-700 p-2 flex justify-center items-center rounded-[3px]">GET IN TOUCH</p>
      </div>
    </div>
  )
}

export default Nav
