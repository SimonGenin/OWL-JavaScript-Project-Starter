# OWL Javascript Project Starter

This repo is an example on how to start a real project with the odoo owl framework.

## Features

- [OWL](https://github.com/odoo/owl)
- Javascript
- Livereload
- [TailwindCSS](https://tailwindcss.com/) + css purging in production
- Rollup

## Installation

[This repo is a "template repository". It means you can quickly create repositories based on this one, without it being a fork.](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#about-repository-templates)

Otherwise, you may clone it:

```bash
git clone https://github.com/SimonGenin/OWL-Typescript-Project-Starter
```

Install dependencies:

```bash
npm install
```

Dev with livereload:

```bash
npm run dev
```

Production build

```bash
npm run build
```

Run tests

```bash
npm run test
```

## Components

It is expected to create components in one file, following this convention:

```js
import { Component, useState, tags } from "@odoo/owl";

export class App extends Component {
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}

App.template = tags.xml/*xml*/ `
    <div t-name="App" class="bg-white shadow m-8 p-2 rounded cursor-pointer" t-on-click="update">
      Hello <t t-esc="state.text"/>
    </div>
`;
```

The template is defined in the file on the bottom and has tailwindcss classes.

## Styles

As it uses Tailwind and its config file, not much has been done to add your own style rules.
I'm still working on a nice solution.
