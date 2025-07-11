// src/company/App.tsx
import React from "react";
import { SharedButton } from "../components/SharedButton";

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
