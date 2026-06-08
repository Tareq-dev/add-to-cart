import React from "react";
import { useCrud } from "react-smart-crud";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div>
      <h1>All Posts</h1>
      <UserPage />
    </div>
  );
}

export default App;
