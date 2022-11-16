import React, { useState } from 'react';

function Toggle({ children }) {
  const [show, setShow] = useState();
  function toggleShow() {
    setShow(!show);
  }
  let buttonText = show ? 'Hide Form' : 'Add New Food';

  return (
    <div>
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}

export default Toggle;
