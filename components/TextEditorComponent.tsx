import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

interface EditorProps {
  /**
   * Header Displayed above Editor
   */
  header?: string;
  /**
   * Header Displayed above Editor
   */
  placeholder?: string;
}

const TextEditorComponent = (props: EditorProps) => {
  const [text, setText] = useState<string>("");
  return (
    <div>
      <div className="card">
        <h1>{props.header}</h1>
        <Editor
          style={{ height: "320px" }}
          value={text}
          placeholder=""
          onTextChange={(e) => setText(e.textValue)}
        />
      </div>
      <Button className="my-3">Publicar</Button>
      <Button type="reset" className="p-button-secondary my-3 ml-3">
        Cancelar
      </Button>
    </div>
  );
};

export default TextEditorComponent;
