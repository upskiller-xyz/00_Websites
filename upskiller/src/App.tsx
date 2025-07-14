// src/App.tsx
import React from "react";
import { SharedButton } from "../../shared/components/SharedButton";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>About Our Company</h1>
      </header>
      <SharedButton>Learn more</SharedButton>
    </div>
  );
}
