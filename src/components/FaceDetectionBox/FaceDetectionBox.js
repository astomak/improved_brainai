import React, { useState } from "react";


function FaceDetectionBox({boxBoundary, percentage}) {
  const [active, setActive] = useState(false);

  const calcBoundary = () => {
    return {
      top: `${boxBoundary.top_row*100}%`,
      bottom: `${boxBoundary.bottom_row*100}%`,
      left: `${boxBoundary.left_col*100}%`,
      right: `${boxBoundary.right_col*100}%`,
      width: `${(boxBoundary.right_col-boxBoundary.left_col)*100}%`,
      height: `${(boxBoundary.bottom_row-boxBoundary.top_row)*100}%`
    }
  }

  return <div 
          className="absolute border-blue-600 border-4" 
          style={calcBoundary()}
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}>
            {active && <span className="bg-blue-600 text-white tracking-wider absolute top-0 right-0">{(percentage*100).toFixed(2)}</span>}
          </div>;
}

export default FaceDetectionBox;