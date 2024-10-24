import ph from "../assets/ai/10.jpeg"

const Csoth24 = () => {
  return (
    <>
        <div className="flex  justify-center items-center h-screen">
          <div className="flex flex-col w-4/6 h-1/3 justify-center text-black backdrop-blur shadow-2xx rounded border-2 border-black">
            <h1 className="text-center text-xl  h-1/5 pt-2">
            AIML & Robotics
            </h1>
            <div className="text-center h-4/5 pt-8">
              10.Guess the word:
              <img src={ph} alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Csoth24