import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  // Use useState to manage the current displayed card
  const [currentInfo, setCurrentInfo] = useState(null);

  // Function to handle card clicks and update the displayed info
  function handleClick(info) {
    console.log(info); // Check console to see what this function does.
    setCurrentInfo(info);
  }

  return (
    <>
      <main className="flex flex-col gap-4 w-full min-h-screen justify-center items-center">
        {/* Display the current information or a message if no card is selected */}
        <h1>{currentInfo ? "You selected: " + currentInfo : "Click a card to learn more about me"}</h1>

        {/* Card components with onClick handlers to update the displayed info */}
        <button
          onClick={() => handleClick("I like solving math problems.")}
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">What i like</h4>
            <p className="text-neutral-400">I like solving math problems</p>
          </div>
        </button>

        <button
          onClick={() => handleClick("I love exploring new places and outdoor activities.")}
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">Outdoor Explorer</h4>
            <p className="text-neutral-400">I love exploring new places and outdoor activities</p>
          </div>
        </button>

        <button
          onClick={() => handleClick("Music is my creative outlet and passion.")}
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">What i enjoy</h4>
            <p className="text-neutral-400">I enjoy </p>
          </div>
        </button>

        <button
          onClick={() => handleClick("I'm passionate about learning new technologies.")}
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={viteLogo} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4 className="">Tech Enthusiast</h4>
            <p className="text-neutral-400">I'm passionate about learning new technologies</p>
          </div>
        </button>
      </main>
    </>
  );
}

export default App;