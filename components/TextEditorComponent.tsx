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
      <div className="card editor">
        <h1>{props.header}</h1>
        <Editor
          style={{ height: "420px" }}
          value={text}
          placeholder={props.placeholder}
          onTextChange={(e) => setText(e.textValue)}
          className="editor"
        />
      </div>
      <div className="container">
      <Button className="my-3">Publicar</Button>
      <Button type="reset" className="p-button-secondary my-3 ml-3">
        Cancelar
      </Button>
      </div>

    </div>
  );
};

export default TextEditorComponent;
