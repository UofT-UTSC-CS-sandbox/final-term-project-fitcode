// PopUpContext.js
/**
 * Popup Context Module
 * 
 * This module defines a React context for managing popups across the application.
 * It provides a `PopupProvider` component that wraps the application's component tree,
 * allowing any child component to trigger popup notifications via the `usePopup` hook.
 *
 * Exports:
 * - PopupProvider: A component that provides the popup functionality to its children.
 * - usePopup: A custom hook for accessing the popup functionality.
 *
 * Key Concepts:
 * - Context: Used to pass data through the component tree without having to pass props down manually.
 * - createContext: Creates a Context object. When React renders a component that subscribes to this Context
 *   object, it will read the current context value from the closest matching Provider above it in the tree.
 * - useContext: A hook that allows you to use the context value in functional components.
 * - useState: A hook to add state to functional components.
 * - useCallback: A hook that returns a memoized callback function, which only changes if one of its dependencies change.
 *
 * Logic:
 * - The `PopupProvider` initializes a `null` state for `popup` using `useState`. This state holds the current popup's
 *   configuration or `null` if no popup is shown.
 * - `showPopup` is a function wrapped in `useCallback` to ensure it does not change unless its dependencies change.
 *   It updates the `popup` state to show a new popup with a specified message and duration. A timeout is set to automatically
 *   reset the `popup` state to `null` after the specified duration, effectively hiding the popup.
 * - The `PopupProvider` renders its children and also conditionally renders the `Popup` component if the `popup` state
 *   is not null, passing the message and duration from the `popup` state.
 * - `usePopup` is a custom hook that uses `useContext` to access the `PopupContext`. It ensures that it is used within a
 *   `PopupProvider`. It provides the `showPopup` function to the components that use this hook.
 *
 * Usage:
 * Wrap your application's root component with `<PopupProvider>` to provide all child components access to the popup functionality.
 * Use `usePopup()` in any component to get access to the `showPopup` method, allowing you to trigger popups anywhere in your app.
 *
 * Example:
 * In your root component:
 *   <PopupProvider>
 *     <App />
 *   </PopupProvider>
 *
 * In any child component:
 *   const { showPopup } = usePopup();
 *   showPopup("Hello World!", 3000);
 */


import React, { createContext, useState, useContext, useCallback } from 'react';
import Popup from './PopUp';
const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState(null);

  const showPopup = useCallback((message, duration = 3000) => {
    setPopup({ message, duration });
    setTimeout(() => {
      setPopup(null);
    }, duration+750);
  }, []);

  return (
    <PopupContext.Provider value={{ showPopup }}>
      {children}
      {popup && <Popup message={popup.message} duration={popup.duration} />}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};