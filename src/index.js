import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const state = {
	type: "div",
	name: "Clock",
	root: true,
	style: {
		display: "flex",
		"flex-direction": "row",
		"justify-content": "center",
	},
	children: [
		{
			type: "div",
			name: "Hour",
			style: {},
			children: [],
		},
		{
			type: "span",
			name: "Minute",
			style: {
				color: "green",
				"font-size": 30,
			},
			children: [],
		},
	],
};

console.log(state.style);

const Component1 = React.createElement(
	state.type,
	{ style: state.style },
	state.name,
	state.children.map((child, index) =>
		React.createElement(child.type, { style: child.style }, child.name)
	)
);

ReactDOM.render(Component1, document.getElementById("root"));

serviceWorker.unregister();
