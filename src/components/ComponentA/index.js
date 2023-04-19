import { useState } from 'react';
import ComponentB from '../ComponentB'
import './index.css'

function ComponentA() {
  const [cendol, setCendol] = useState(2);
  const [isTrue, setIsTrue] = useState(false);
  
  return (
    <div className='g'>
      <div className='ga'>
        <div className='gan' style={{ backgroundColor: isTrue ? 'red' : 'blue' }}>
          <ComponentB cendol={cendol} setCendol={setCendol} isTrue={isTrue} setIsTrue={setIsTrue} />
        </div>
      </div>
    </div>
  );
}

export default ComponentA;