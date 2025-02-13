import React from 'react';
import logo from './assets/react.svg';
import './App.css';

export const App = () => {
    const currentYear = new Date().getFullYear(); // Декларативный стиль

    return React.createElement(
        "div",
        { className: "App" },
        React.createElement(
            "header",
            { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement(
                "p",
                null,
                "Edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload 2."
            ),
            React.createElement(
                "a",
                {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer"
                },
                "Learn React"
            ),
			// Добавляем footer с текущим годом
			React.createElement(
				"footer",
				null,
				React.createElement("p", null, `Текущий год: ${currentYear}`)
			)
        )
    );
};
