import React, { useState, useEffect } from "react";
import MarkdownEditor from "./components/MarkdownEditor"; // Assuming structure based on your screenshot
import "./styles/App.css"; // Adjust path based on your exact folder structure

function App() {
  // State Management
  const [markdown, setMarkdown] = useState("# Hello World");
  const [loading, setLoading] = useState(true);

  // useEffect to simulate loading and ensure component is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulates a 1-second load time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Loading Screen
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Render Editor
  return (
    <div>
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
    </div>
  );
}

export default App;
