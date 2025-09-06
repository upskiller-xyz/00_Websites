import React from 'react';
import ReactMarkdown from 'react-markdown';

interface DocumentMarkdownProps {
  content: string;
}

const DocumentMarkdown: React.FC<DocumentMarkdownProps> = ({ content }) => {
  return (
    <div className="privacy-markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default DocumentMarkdown;