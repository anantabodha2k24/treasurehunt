import { Routes, Route } from 'react-router-dom';
import Cs1 from './cs/Cs1'
import Cs2 from './cs/Cs2'
import Cs3 from './cs/Cs3'
import Cs4 from './cs/Cs4'
import Cs5 from './cs/Cs5'
import Cs6 from './cs/Cs6'
import Cs7 from './cs/Cs7'
import Cs8 from './cs/Cs8'
import Cs9 from './cs/Cs9'
import Cs10 from './cs/Cs10'
import Wt1 from './wt/Cs1'
import Wt2 from './wt/Cs2'
import Wt3 from './wt/Cs3'
import Wt4 from './wt/Cs4'
import Wt5 from './wt/Cs5'
import Wt6 from './wt/Cs6'
import Wt7 from './wt/Cs7'
import Wt8 from './wt/Cs8'
import Wt9 from './wt/Cs9'
import Wt10 from './wt/Cs10'
import Ai1 from './ai/Cs1'
import Ai2 from './ai/Cs2'
import Ai3 from './ai/Cs3'
import Ai4 from './ai/Cs4'
import Ai5 from './ai/Cs5'
import Ai6 from './ai/Cs6'
import Ai7 from './ai/Cs7'
import Ai8 from './ai/Cs8'
import Ai9 from './ai/Cs9'
import Ai10 from './ai/Cs10'
import Sm1 from './sm/Cs1'
import Sm2 from './sm/Cs2'
import Sm3 from './sm/Cs3'
import Sm4 from './sm/Cs4'
import Sm5 from './sm/Cs5'
import Sm6 from './sm/Cs6'
import Sm7 from './sm/Cs7'
import Sm8 from './sm/Cs8'
import Sm9 from './sm/Cs9'
import Sm10 from './sm/Cs10'
import Pc1 from './pc/Pc1'
import Pc2 from './pc/Pc2'
import Pc3 from './pc/Pc3'
import Pc4 from './pc/Pc4'
import Pc5 from './pc/Pc5'
import Pc6 from './pc/Pc6'
import Pc7 from './pc/Pc7'
import Pc8 from './pc/Pc8'
import Pc9 from './pc/Pc9'
import Pc10 from './pc/Pc10'
import Hs1 from './hs/Cs1'
import Hs2 from './hs/Cs2'
import Hs3 from './hs/Cs3'
import Hs4 from './hs/Cs4'
import Hs5 from './hs/Cs5'
import Hs6 from './hs/Cs6'
import Hs7 from './hs/Cs7'
import Hs8 from './hs/Cs8'
import Hs9 from './hs/Cs9'
import Hs10 from './hs/Cs10'




const App = () => {
  return (
    <>
      <h1 className="flex text-2xl justify-center bg-yellow-400 py-4">Trusure Hunt</h1>
      <h2 className='flex justify-center bg-red-500'>University College Of Engineering Arni</h2>
      <div className="">
      <Routes>
        <Route path="/" element={<Cs1 />} />
        <Route path="cs/2" element={<Cs2 />} />
        <Route path="cs/3" element={<Cs3 />} />
        <Route path="cs/4" element={<Cs4 />} />
        <Route path="cs/5" element={<Cs5 />} />
        <Route path="cs/6" element={<Cs6 />} />
        <Route path="cs/7" element={<Cs7 />} />
        <Route path="cs/8" element={<Cs8 />} />
        <Route path="cs/9" element={<Cs9 />} />
        <Route path="cs/10" element={<Cs10 />} />
        <Route path="wt/" element={<Wt1 />} />
        <Route path="wt/2" element={<Wt2 />} />
        <Route path="wt/3" element={<Wt3 />} />
        <Route path="wt/4" element={<Wt4 />} />
        <Route path="wt/5" element={<Wt5 />} />
        <Route path="wt/6" element={<Wt6 />} />
        <Route path="wt/7" element={<Wt7 />} />
        <Route path="wt/8" element={<Wt8 />} />
        <Route path="wt/9" element={<Wt9 />} />
        <Route path="wt/10" element={<Wt10 />} />
        <Route path="ai/" element={<Ai1 />} />
        <Route path="ai/2" element={<Ai2 />} />
        <Route path="ai/3" element={<Ai3 />} />
        <Route path="ai/4" element={<Ai4 />} />
        <Route path="ai/5" element={<Ai5 />} />
        <Route path="ai/6" element={<Ai6 />} />
        <Route path="ai/7" element={<Ai7 />} />
        <Route path="ai/8" element={<Ai8 />} />
        <Route path="ai/9" element={<Ai9 />} />
        <Route path="ai/10" element={<Ai10 />} />
        <Route path="sm/" element={<Sm1 />} />
        <Route path="sm/2" element={<Sm2 />} />
        <Route path="sm/3" element={<Sm3 />} />
        <Route path="sm/4" element={<Sm4 />} />
        <Route path="sm/5" element={<Sm5 />} />
        <Route path="sm/6" element={<Sm6 />} />
        <Route path="sm/7" element={<Sm7 />} />
        <Route path="sm/8" element={<Sm8 />} />
        <Route path="sm/9" element={<Sm9 />} />
        <Route path="sm/10" element={<Sm10 />} />
        <Route path="pc/" element={<Pc1 />} />
        <Route path="pc/2" element={<Pc2 />} />
        <Route path="pc/3" element={<Pc3 />} />
        <Route path="pc/4" element={<Pc4 />} />
        <Route path="pc/5" element={<Pc5 />} />
        <Route path="pc/6" element={<Pc6 />} />
        <Route path="pc/7" element={<Pc7 />} />
        <Route path="pc/8" element={<Pc8 />} />
        <Route path="pc/9" element={<Pc9 />} />
        <Route path="pc/10" element={<Pc10 />} />
        <Route path="hs/" element={<Hs1 />} />
        <Route path="hs/2" element={<Hs2 />} />
        <Route path="hs/3" element={<Hs3 />} />
        <Route path="hs/4" element={<Hs4 />} />
        <Route path="hs/5" element={<Hs5 />} />
        <Route path="hs/6" element={<Hs6 />} />
        <Route path="hs/7" element={<Hs7 />} />
        <Route path="hs/8" element={<Hs8 />} />
        <Route path="hs/9" element={<Hs9 />} />
        <Route path="hs/10" element={<Hs10 />} />
      </Routes>
        
      </div>
    </>
  )
}

export default App