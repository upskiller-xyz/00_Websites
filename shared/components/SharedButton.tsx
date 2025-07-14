// src/components/SharedButton.tsx
import React from "react";

export function SharedButton({ children }: { children: React.ReactNode }) {
  return <button className="btn">{children}</button>;
}
