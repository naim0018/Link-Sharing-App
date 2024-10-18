/* eslint-disable react/prop-types */
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [socialButtons, setSocialButtons] = useState([
    { id: 'github', icon: <GitHubIcon />, label: 'GitHub', bgColor: 'bg-gray-900', textColor: 'text-white' },
    { id: 'youtube', icon: <YouTubeIcon />, label: 'YouTube', bgColor: 'bg-red-600', textColor: 'text-white' },
    { id: 'linkedin', icon: <LinkedInIcon />, label: 'LinkedIn', bgColor: 'bg-blue-600', textColor: 'text-white' },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(socialButtons);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSocialButtons(items);
  };

  return (
    <div className="">
      <div className="relative bg-indigo-600 min-h-96 rounded-b-3xl w-full" >
{/* Header */}
        <div className="absolute w-11/12 left-1/2 transform -translate-x-1/2 top-5 bg-white rounded-lg flex justify-between items-center p-4">
          <Link to="/links" className="text-indigo-600 border-[1px] border-indigo-600 px-4 py-2 rounded-lg text-sm font-medium">
            Back to Editor
          </Link>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Share Link
          </button>
        </div>
      </div>
      
      
      {/* Profile Card */}
      <div
        className="absolute top-96  left-1/2 transform -translate-x-1/2 -translate-y-1/4  bg-white rounded-3xl shadow-lg overflow-hidden w-96 max-w-md p-8 text-center"
      >
        <img
          className="w-24 h-24  rounded-full border-4 border-indigo-600 mx-auto "
          src="https://i.pravatar.cc/150?img=3"
          alt="User profile avatar"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Ben Wright</h2>
        <p className="text-gray-500">ben@example.com</p>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="socialButtons">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="mt-8 space-y-4">
                {socialButtons.map((button, index) => (
                  <Draggable key={button.id} draggableId={button.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="cursor-move"
                      >
                        <SocialButton
                          icon={button.icon}
                          label={button.label}
                          bgColor={button.bgColor}
                          textColor={button.textColor}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

function SocialButton({ icon, label, bgColor, textColor }) {
  return (
    <div
      className={`flex items-center justify-between w-full ${bgColor} ${textColor} py-3 px-4 rounded-lg`}
    >
      <span className="flex items-center">
        {icon}
        <span className="ml-2">{label}</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Profile;
