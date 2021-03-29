import React from "react";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/TableColumn";
import "./App.css";
import ui5_wc_logo from "./wc.png";
import react_logo from "./react.png";

// Scoping
// import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
// setCustomElementsScopingSuffix("xyz");

export default function Root(props) {
  return (
    <section className="section2">
      <h1>
        Micro App 1 - React + UI5 Web Components{" "}
        <span className="version">1.0.0-rc.11</span>
      </h1>
      <code>
        <pre>
          <h3 className="title">
            &lt;ui5-table has-more&gt;&lt;/ui5-table&gt;
          </h3>
        </pre>
      </code>

      <div className="logos">
        <img className="img" src={react_logo} />
        <img className="img" src={ui5_wc_logo} />
      </div>

      {/* Table */}
      <ui5-table has-more>
        <ui5-table-column slot="columns">Product</ui5-table-column>
        <ui5-table-column slot="columns">Price</ui5-table-column>

        <ui5-table-row>
          <ui5-table-cell>
            <b>Milk 2l, Organic, by YourFarm LTD</b>
          </ui5-table-cell>
          <ui5-table-cell>
            <b>2 USD</b>
          </ui5-table-cell>
        </ui5-table-row>
      </ui5-table>

      {/*  Scoped table */}
      {/* <ui5-table-xyz has-more>
		<ui5-table-column-xyz slot="columns">Product</ui5-table-column-xyz>
		<ui5-table-column-xyz slot="columns">Price</ui5-table-column-xyz>
		
		<ui5-table-row-xyz>
			<ui5-table-cell-xyz><b>Milk 2l, Organic, by YourFarm LTD</b></ui5-table-cell-xyz>
			<ui5-table-cell-xyz><b>2 USD</b></ui5-table-cell-xyz>
		</ui5-table-row-xyz>
	</ui5-table-xyz> */}
    </section>
  );
}
