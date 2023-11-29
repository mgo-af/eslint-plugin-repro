/**
 * @fileoverview ESLint rules for Fuegokit React
 * @author Matt Oliver
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const requireIndex = require("requireindex");
import requireIndex from "requireindex";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
const rules = requireIndex(__dirname + "/rules");

export { rules };
