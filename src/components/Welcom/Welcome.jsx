import React from 'react';
import { useState, useEffect } from 'react';

function Welcome() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div data-testid='welcome'>
      { visible && (
        <div className="alert alert-success" role="alert">
          Benvenuto nella mia app React EpiBooks!
        </div>  
      )}
    </div>
  );
}
export default Welcome;
