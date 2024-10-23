import ph from "../assets/hs/5.jpeg"

const Csoth24 = () => {
  return (
    <>
        <div className="flex  justify-center items-center h-screen">
          <div className="flex flex-col w-4/6 h-3/5 justify-center bg-rose-500 rounded border-2 border-white">
            <h1 className="text-center text-xl text-white h-1/5 pt-2">
            Hardware and Software
            </h1>
            <div className="text-center flex justify-center h-4/5 pt-2 py-2 flex-wrap">
              5. I turn paper to pixels with a gentle sweep, capturing images and text from your heap. What am I?
              <img src={ph} alt="" className="w-72"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Csoth24