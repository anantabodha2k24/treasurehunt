import ph from "../assets/sm/4.jpeg"

const Csoth24 = () => {
  return (
    <>
        <div className="flex  justify-center items-center h-screen">
          <div className="flex flex-col w-4/6 h-2/3 justify-center flex-wrap text-black backdrop-blur shadow-2xx rounded border-2 border-black">
            <h1 className="text-center text-xl  h-1/6 pt-2">
            Social Media
            </h1>
            <div className="text-center flex justify-center h-5/6 pt-2 py-2 flex-wrap">
              4.  I’m someone who keeps up with your every move and post, showing support and interest, that’s what I do most. What am I?
              <img src={ph} alt="" className="w-72"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Csoth24