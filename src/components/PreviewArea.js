import React, { useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ position, rotation, size, message }) {
  const characterWidth = 95 * size;  
  const characterHeight = 100 * size;
  const [count, setCount] = useState([{id: 1}]);

  return (
    <div className="w-1/4 h-full flex-none overflow-hidden flex flex-col items-center">
      <button className="border-2 border-black px-3" onClick={()=>setCount([...count, {id: count.length+1}])}>Add</button>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          transition: "transform 0.5s ease",
          position: "relative",
          width: `${characterWidth}px`,
          height: `${characterHeight}px`,
        }}
      >

        {
          count.map(()=>(
              <CatSprite width={characterWidth} height={characterHeight} />
          ))
        }

      </div>
      {message && <div className="mt-2 text-xl font-bold">{message}</div>}
    </div>
  );
}
