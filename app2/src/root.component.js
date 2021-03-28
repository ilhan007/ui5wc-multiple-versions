import React from "react";
import "@ui5/webcomponents/dist/Button"
import "@ui5/webcomponents/dist/Table"
import "@ui5/webcomponents/dist/TableRow"
import "@ui5/webcomponents/dist/TableCell"
import "@ui5/webcomponents/dist/TableColumn"

import "./App.css";

// Scoping
import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
setCustomElementsScopingSuffix("dkom");


export default function Root(props) {
  return <section className="section2"> 
	<h1>App 2 - UI5 Web Components 1.0.0-rc.12</h1>
	<code>
		<pre>
			<h3 className="title">
&lt;ui5-table growing="Button"&gt;&lt;/ui5-table&gt;
			</h3>
		</pre>
	</code>

	{/* Table with Load More Button */}
	{/* <ui5-table growing="Button">
		<ui5-table-column slot="columns">Product</ui5-table-column>
		<ui5-table-column slot="columns">Price</ui5-table-column>

		<ui5-table-row>
			<ui5-table-cell><b>Laptop HP, 15 inch, Quad-core</b></ui5-table-cell>
			<ui5-table-cell><b>1000 USD</b></ui5-table-cell>
		</ui5-table-row>
	</ui5-table> */}

	{/*  Scoped table */}
	<ui5-table-dkom growing="Button">
		<ui5-table-column-dkom slot="columns">Product</ui5-table-column-dkom>
		<ui5-table-column-dkom slot="columns">Price</ui5-table-column-dkom>

		<ui5-table-row-dkom>
			<ui5-table-cell-dkom>
				<b>Laptop HP, 15 inch, Quad-core</b>
			</ui5-table-cell-dkom>
			<ui5-table-cell-dkom>
				<b>1000 USD</b>
			</ui5-table-cell-dkom>
		</ui5-table-row-dkom>
	</ui5-table-dkom>
  </section>;
}
