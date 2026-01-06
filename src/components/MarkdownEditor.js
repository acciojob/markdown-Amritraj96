import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <div className="app">
      {/* Markdown Input Area */}
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="# Type your markdown here..."
      />

      {/* Markdown Preview Area */}
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
