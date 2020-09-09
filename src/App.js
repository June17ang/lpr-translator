import React, { useState } from "react";
import "./index.css";
import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";

export default function App() {
  const [language, setLanguage] = useState("zh-CN");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
