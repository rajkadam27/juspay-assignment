import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function Sidebar({ availableActions }) {
  return (
    <Droppable droppableId="sidebar">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-1/4 h-full flex-none overflow-y-auto border-r border-gray-200 p-2"
        >
          <div className="font-bold">{"Actions"}</div>
          {availableActions.map((action, index) => (
            <Draggable key={action.id} draggableId={action.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="flex items-center bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                >
                  {action.content}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
