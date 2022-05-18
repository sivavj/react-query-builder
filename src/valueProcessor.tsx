import React from "react";
import { defaultValueProcessor, ValueProcessor } from "react-querybuilder";

export const valueProcessor: ValueProcessor = (field, operator, value) => {
  let val = `'${value}'`;

  if (field === "date" || field === "order_date" || field === "ship_date") {
    val = `date '${value}'`;
  } else {
    val = defaultValueProcessor(field, operator, value);
  }

  return val;
};
export default valueProcessor;
