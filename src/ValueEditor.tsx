import React from "react";
import {
  ValueEditorProps,
  ValueEditor as DefaultValueEditor,
} from "react-querybuilder";
import ReactDatePicker from "react-datepicker";
import { format, isValid, parse } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const ValueEditor = (props: ValueEditorProps) => {
  const { fieldData, handleOnChange, operator, value } = props;

  if (operator === "null" || operator === "notNull") {
    return null;
  }

  if (fieldData.datatype === "date") {
    <div style={{ display: "inline-block" }}>
      <ReactDatePicker
        onChange={(d: Date) => {
          handleOnChange(isValid(d) ? format(d, "yyyy-MM-dd") : null);
        }}
        value={value || ""}
        selected={value ? parse(value, "yyyy-MM-dd", new Date()) : new Date()}
      />
    </div>;
  }

  return <DefaultValueEditor {...props} />;
};
export default ValueEditor;
