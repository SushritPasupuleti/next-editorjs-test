import React, { Component } from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constant";
import { data } from './data';

const ReactEditor = () => {
    return (
        <>
        <h1>Editor</h1>
        <EditorJs
            tools={EDITOR_JS_TOOLS}
            data={data}
        />
        </>
    );
}

export default ReactEditor;