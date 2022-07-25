import * as allMethods from "./modules/index"

import { mixin } from "./modules/mixin"
const U = mixin(allMethods) as object

export default U
