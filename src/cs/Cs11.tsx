import ph from "../assets/cs/11.jpg"

const Csoth24 = () => {
  return (
    <>
        <div className="flex  justify-center items-center h-screen">
          <div className="flex flex-col h-max w-4/6 justify-center text-black backdrop-blur shadow-2xx rounded border-2 border-black">
            <h1 className="text-center text-xl  h-1/5 pt-2">
              Final
            </h1><br/>
            <div className="text-center flex justify-center h-4/5 pt-2 py-2 flex-wrap">
              Guess the Word:
              <img src={ph} alt="" className="w-72"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Csoth24