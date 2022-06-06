import "../styles/header.styl";
import m from "mithril";
import logo from "../images/logo.svg";

export default function Header() {
  return {
    view: function () {
      return m("header", { class: "header-container" }, [
        m("div", { class: "header-container-details" }, [
          m("h2", { class: "header-container-sub-title" }, "My balance"),
          m("h1", { class: "header-container-title" }, "$921.48"),
        ]),
        m("img", {
          src: logo,
          alt: "logo",
          class: "header-container-logo",
        }),
      ]);
    },
  };
}
