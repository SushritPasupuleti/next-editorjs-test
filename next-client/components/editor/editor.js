import React, { Component } from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";
import { data } from './data';

export default ReactEditor = () => {
    return (
        <EditorJs
            tools={EDITOR_JS_TOOLS}
            data={data}
        />
    );
}