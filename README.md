# Web Programming - Assignment 5

A simple product dashboard built with React and Vite.

## Run

```bash
cd assignment1
npm install
npm run dev
```

To create a production build, run `npm run build` inside `assignment1`.

## File organization

- `assignment1/src/App.jsx`: manages `showProducts` and `name`, the button, and the controlled input.
- `assignment1/src/components/ProductList.jsx`: stores the three products and renders them with `map` using product IDs as keys.
- `assignment1/src/components/Product.jsx`: displays the title and price passed through props inside a Card.
- `assignment1/src/components/Card.jsx`: adds a border, padding, and margin around its children.
- `assignment1/src/main.jsx`: renders App and imports the basic styles from `style.css`.
- `assignment1/index.html`: contains the React root element.
- `assignment1/package.json`: contains the dependencies and Vite commands.

## Challenges

Keeping state in the right component was the main part to work through. The button and input both belong to App, so App holds both state variables. Product only receives props, and Card only renders its children.

For the list, each product needs a stable key. The product ID is used instead of the array index. The input uses `value` and `onChange` together so the greeting follows the name as it is typed.

## Checks

The production build passes. In the browser, the button hides and shows all three products, typing updates the greeting, and the name stays the same when the products are toggled.
