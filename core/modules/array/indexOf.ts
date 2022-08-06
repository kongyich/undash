import createIndexFinder from "../../internal/_createIndexfinder";
import sortIndex from "./sortIndex";
import findIndex from "./findIndex"


export default createIndexFinder(1, findIndex, sortIndex)
