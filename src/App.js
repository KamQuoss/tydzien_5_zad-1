import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import Modal from "./components/Dialog";

export default function App() {
  const [isVisible, setVisibility] = useState(false);
  const ref = useRef(null);

  const openModal = () => setVisibility(true);
  const hideModal = () => setVisibility(false);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisibility(false);
    }
  };

  const handleModalButton = (event) => {
    console.log("Klinkęty", event.target);
    setVisibility(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="App">
      <h1>Tydzień 5: Budowa interfejsu</h1>
      <h2>Zadanie 1</h2>
      <Button onClick={openModal}>Open Modal</Button>
      {isVisible && (
        <Modal
          title={"Tytuł"}
          text={"This is a message for You."}
          onClick={hideModal}
          ref={ref}
        >
          <Button onClick={handleModalButton}>Confirm</Button>
          <Button onClick={handleModalButton}>Abort</Button>
        </Modal>
      )}
    </div>
  );
}
