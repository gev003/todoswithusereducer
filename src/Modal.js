import React from "react";
import { useEffect } from "react";

export default function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <h2>{modalContent}</h2>
    </div>
  );
}
