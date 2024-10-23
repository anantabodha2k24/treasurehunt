import ph from "../assets/sm/8.jpeg"
const Csoth24 = () => {
  return (
    <>
        <div className="flex  justify-center items-center h-screen">
          <div className="flex flex-col w-4/6 h-1/3 justify-center bg-rose-500 rounded border-2 border-white">
            <h1 className="text-center text-xl text-white h-1/5 pt-2">
            Social Media
            </h1>
            <div className="text-center flex justify-center h-4/5 pt-2 py-2 flex-wrap">
              8.Find the word: 
              <img src={ph} alt="" className="w-72"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Csoth24