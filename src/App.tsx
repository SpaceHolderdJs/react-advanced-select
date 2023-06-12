import React from "react";
import "./App.css";
import { Select } from "./components/select/Select";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Select
        value="val1"
        options={["val1", "val2", "val3"]}
        onChange={(val) => {
          alert(val);
        }}
      />

      <Select
        isMultiple={true}
        value="val1"
        options={["val1", "val2", "val3"]}
        onChange={(val) => {
          // alert(val);
        }}
      />
    </div>
  );
}

export default App;
