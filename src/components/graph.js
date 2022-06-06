import m from "mithril";
import "../styles/graph.styl";
import Chart from "./chart";

export default function Graph() {
  return {
    view: function () {
      return m("main", { class: "graph-container" }, [
        //1. header
        m("h3", { class: "graph-container-title" }, "Spending - Last 7 days"),
        //2. chart
        //3. summary
        m(Chart),
        m("div", { class: "graph-container-separator" }),
        m("section", { class: "graph-container-section" }, [
          m(
            "p",
            { class: "graph-container-section-title" },
            "Total this month"
          ),
          m("div", { class: "graph-container-section-price" }, [
            m(
              "h2",
              { class: "graph-container-section-price-dollar" },
              "$478.33"
            ),
            m("div", { class: "graph-container-section-price-details" }, [
              m("p", { class: "graph-container-section-price-perc" }, "+2.4%"),
              ("p",
              { class: "graph-container-section-price-month" },
              "from last month"),
            ]),
          ]),
        ]),
      ]);
    },
  };
}
