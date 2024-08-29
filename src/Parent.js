import React, { useRef } from 'react';

function Parent() {
  const divRef = useRef(null);

  const schimbaCuloarea = () => {
    divRef.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      <div ref={divRef} style={{ width: 200, height: 200, backgroundColor: 'lightgray' }}>
        Schimbă-mi culoarea!
      </div>
      <button onClick={schimbaCuloarea}>Schimbă Culoarea</button>
    </div>
  );
}

export default Parent;
