import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState(1);
  const [message, setMessage] = useState("");
  const [actions, setActions] = useState([]);

  const availableActions = [
    { id: 'move', content: 'Move 10 steps' },
    { id: 'turnLeft', content: 'Turn 15 degrees left' },
    { id: 'turnRight', content: 'Turn 15 degrees right' },
    { id: 'sayHello', content: 'Say Hello' },
    { id: 'increaseSize', content: 'Increase Size' },
    { id: 'decreaseSize', content: 'Decrease Size' },
    { id: 'rotate360', content: 'Rotate 360 degrees' },
    { id: 'randomPosition', content: 'Go to Random Position' },
    { id: 'moveToXY', content: 'Move to X=50, Y=50' },
    { id: 'goToOrigin', content: 'Go to (0, 0)' },
    { id: 'moveYBy50', content: 'Move Y by 50' },
    { id: 'moveXBy50', content: 'Move X by 50' },
  ];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const actionId = availableActions[result.source.index].id;
    setActions((prev) => [...prev, actionId]);
  };

  const handleActionClick = (actionId) => {
    switch (actionId) {
      case 'move':
        moveCat();
        break;
      case 'turnLeft':
        turnLeft();
        break;
      case 'turnRight':
        turnRight();
        break;
      case 'sayHello':
        greet();
        break;
      case 'increaseSize':
        enlargeCat();
        break;
      case 'decreaseSize':
        shrinkCat();
        break;
      case 'rotate360':
        rotate360();
        break;
      case 'randomPosition':
        goToRandomPosition();
        break;
      case 'moveToXY':
        moveToXY();
        break;
      case 'goToOrigin':
        goToOrigin();
        break;
      case 'moveYBy50':
        moveYBy50();
        break;
      case 'moveXBy50':
        moveXBy50();
        break;
      default:
        break;
    }
  };

  const handleDeleteAction = (index) => {
    setActions((prev) => prev.filter((_, i) => i !== index));
  };

  const moveCat = () => {
    const radians = (rotation * Math.PI) / 180;
    const newX = position.x + 10 * Math.cos(radians);
    const newY = position.y + 10 * Math.sin(radians);
    setPosition({ x: newX, y: newY });
  };

  const turnLeft = () => setRotation((prev) => prev - 15);
  const turnRight = () => setRotation((prev) => prev + 15);
  
  const greet = () => {
    setMessage("Hello!");
    setTimeout(() => setMessage(""), 1000); // 1 second
  };

  const enlargeCat = () => setSize((prev) => Math.min(prev + 0.5, 10));
  
  const shrinkCat = () => setSize((prev) => Math.max(prev - 0.5, 0.5));

  const rotate360 = () => {
    setRotation((prev) => prev + 360);
  };

  const goToRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 400);
    const randomY = Math.floor(Math.random() * 400);
    setPosition({ x: randomX, y: randomY });
  };

  const moveToXY = () => {
    setPosition({ x: 50, y: 50 });
  };

  const goToOrigin = () => {
    setPosition({ x: 0, y: 0 });
  };

  const moveYBy50 = () => {
    setPosition((prev) => ({ ...prev, y: prev.y + 50 }));
  };

  const moveXBy50 = () => {
    setPosition((prev) => ({ ...prev, x: prev.x + 50 }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row">
          <Sidebar availableActions={availableActions} />
          {/* <MidArea actions={actions} onActionClick={handleActionClick} /> */}
          <MidArea actions={actions} onActionClick={handleActionClick} onDeleteAction={handleDeleteAction} />
          <PreviewArea position={position} rotation={rotation} size={size} message={message} />
        </div>
      </div>
    </DragDropContext>
  );
}
