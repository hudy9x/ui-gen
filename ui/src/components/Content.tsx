"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { useMainContext } from "./MainContext";
import ContentItem from "./ContentItem";

export default function Content() {
  const { layouts, removeLayout } = useMainContext();

  const onDelete = (index: number) => {
    removeLayout(index);
  };

  const onGenerate = async () => {
    const response = await fetch("http://localhost:3232/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        layouts,
      }),
    });
  };

  const onDragEnd = (result: DropResult) => {
    console.log("onDragEnd", result);
  };

  return (
    <div className="relative bg-gray-100 w-full h-screen overflow-y-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="component">
          {(provided, snapshot) => {
            return (
              <section
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="content w-[600px] mx-auto py-12 space-y-2"
              >
                {layouts.map((layout, index) => {
                  console.log(index);
                  return (
                    <Draggable key={layout} draggableId={layout} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex items-center gap-2 group"
                        >
                          {/* <div className="px-6 py-3 border bg-white w-full">{layout}</div> */}
                          <ContentItem name={layout} />
                          <span className="grow-0 w-[30px] text-gray-500 cursor-pointer">
                            <XMarkIcon
                              className="p-1 group-hover:block hidden"
                              onClick={() => onDelete(index)}
                            />
                          </span>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </section>
            );
          }}
        </Droppable>
      </DragDropContext>
      <button
        onClick={onGenerate}
        className="fixed bottom-4 right-4 px-6 py-2 border rounded-md bg-indigo-500 text-white"
      >
        Generate
      </button>
    </div>
  );
}
