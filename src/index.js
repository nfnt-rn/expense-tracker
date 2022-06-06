import m from "mithril";
import Graph from "./components/graph";
import Header from "./components/header";
import "./styles/index.styl";

var root = document.body;

m.mount(root, function () {
  return {
    view: function (vnode) {
      return m("div", [
        m("div", { class: "container" }, [m(Header), m(Graph)]),
        m(
          "footer",
          { class: "footer" },
          "© Copyright 2022. Expenses chart component clone made with mithriljs/stylus by nfnt."
        ),
      ]);
    },
  };
});
