// import type and const based on that type
// write a function with argument of imported type
import { mikePreferences } from "./src/exportType.ts";
import type { UserPreferences } from "./src/exportType.ts";
// import {} from "lodash";

function printPreferences(data: UserPreferences) {
  console.log(data);
  // times(4);
  console.superLog();
}

printPreferences(mikePreferences);

import.meta;
