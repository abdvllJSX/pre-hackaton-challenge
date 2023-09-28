import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Create a separate Loader component

function App() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // All images on the entire website have loaded
      setAllImagesLoaded(true);
    };

    // Add the load event listener when the component mounts
    window.addEventListener('load', handleLoad);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      {allImagesLoaded ? (
        // All images have loaded, render your website content
        <div>
          <h1>Your Website Content Goes Here</h1>
          {/* Render your website content */}
        </div>
      ) : (
        // Images are still loading, display the loader component
        <Loader />
      )}
    </div>
  );
}

export default App;
