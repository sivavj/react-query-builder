import QueryBuilder, {
  formatQuery,
  RuleGroupType,
  ValueEditor,
} from "react-querybuilder";
import { useState } from "react";
import { materialControlElements } from "@react-querybuilder/material";
import "./App.css";
import fields from "./fields";
import getOperators from "./getOperators";
import { Language } from "./types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import translations from "./translations";
import combinators from "./combinators";
import CombinatorSelector from "./CombinatorSelector";
import valueProcessor from "./valueProcessor";
import { MenuItem, Select } from "@mui/material";

function App() {
  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: [],
  });
  const [language, setLanguage] = useState<Language>("en");
  return (
    <>
      <FormControl variant="standard" sx={{my: 1}}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
        </Select>
      </FormControl>
      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={(q) => setQuery(q)}
        controlElements={materialControlElements}
        // controlElements={{
        //   combinatorSelector: CombinatorSelector,
        //   valueEditor: ValueEditor,
        // }}
        getOperators={getOperators}
        translations={translations[language]}
        combinators={combinators[language]}
      />
      <pre>{formatQuery(query, { format: "sql", valueProcessor })}</pre>
      <pre> {formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;
