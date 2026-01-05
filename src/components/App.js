import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import '../styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState(""); // Initialize state
  const [loading, setLoading] = useState(true); // Initialize loading

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    // Set a timer to stop loading after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    // Cleanup function is good practice (though not strictly required for this specific test)
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // FIX 1: Added className="loading" as per requirements
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      {/* FIX 2: Added className="textarea" */}
      {/* FIX 3: Added value={markdown} for two-way binding */}
      <textarea 
        className="textarea"
        onChange={handleChange} 
        value={markdown} 
      />
      
      {/* FIX 4: Passed markdown as direct child (safest for all versions) */}
      <ReactMarkdown className="preview">
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default App;
