import m from "mithril";
import Graph from "./components/graph";
import Header from "./components/header";
import "./styles/index.styl";

var root = document.body;

m.mount(root, function () {
  return {
    view: function (vnode) {
      return m("div", { class: "container" }, [m(Header), m(Graph)]);
    },
  };
});
