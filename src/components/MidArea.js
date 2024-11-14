import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { FaTrash } from "react-icons/fa";

export default function MidArea({ actions, onActionClick, onDeleteAction }) {
  return (
    <Droppable droppableId="midArea">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex-1 h-full overflow-auto p-4 border-dashed border-2 border-gray-300"
        >
          <div className="font-bold">{"Dropped Actions"}</div>
          {actions.map((actionId, index) => (
            <div key={index} className="flex justify-between items-center bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <span onClick={() => onActionClick(actionId)}>{actionId}</span>
              <button onClick={() => onDeleteAction(index)} className="text-white ml-2">
                <FaTrash />
              </button>
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
