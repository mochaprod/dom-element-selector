
import makeTree from "../core/tree";
import searcher from "./searcher";
import global from "../util/globals";

export default function (string) {
    // Call our makeTree function to build a relationship between the elements
    // we are trying to look for in the DOM.
    const   tree = makeTree(string),
            doc = global.document;

    const   result = tree.map(t => {
        console.log("Indiv:");
        console.log(t);
        return searcher(doc, t, []);
    });

    return result;
}
