import m from "mithril";
import "../styles/chart.styl";

export default function Chart() {
  let spent = [41.75, 18.13, 79.63, 63.73, 36.62, 30.9, 56.56];
  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let max = Math.max(...spent);

  return {
    view: function () {
      return m(
        "ul",
        { class: "chart-container" },
        spent.map((val, i) => {
          return m("div", { class: "chart-container-inner" }, [
            m(
              "p",
              {
                id: `chart-container-inner-item-${i}`,
                class: "chart-container-inner-item",
                style: `top:${100 - val - 27}%`,
              },
              "$" + val.toString()
            ),
            m("li", {
              onmouseover: function () {
                let s = document.getElementById(
                  `chart-container-inner-item-${i}`
                );
                s.classList.add("chart-container-inner-item-active");
              },
              onmouseout: function () {
                let s = document.getElementById(
                  `chart-container-inner-item-${i}`
                );
                s.classList.remove("chart-container-inner-item-active");
              },
              class:
                max === val
                  ? "chart-container-bar chart-container-bar-max"
                  : "chart-container-bar",
              style: `height:${val}% !important;`,
            }),
            m("p", { class: "chart-container-bar-label" }, days[i]),
          ]);
        })
      );
    },
  };
}
