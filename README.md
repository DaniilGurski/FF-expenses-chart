# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-solution-with-dynamically-resizable-charts-zZYfgk8O7r
- Live Site URL: https://daniilgurski.github.io/FM-Expenses-chart/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Bem methology

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
:root {
    --clr-primary-100: hsl(186, 34%, 60%);
    --clr-primary-200: hsl(10, 79%, 65%);

    --clr-neutral-100 : hsl(33, 100%, 98%);
    --clr-neutral-200: hsl(27, 66%, 92%);
    --clr-neutral-300: hsl(28, 10%, 53%);
    --clr-neutral-400: hsl(25, 47%, 15%);

    --ff-primary: 'DM Sans', sans-serif;
    --ff-body: var(--ff-primary);
    --ff-heading: var(--ff-primary);

    --fw-regular: 400;
    --fw-bold: 700;

    --fs-100: 1.125rem;
    --fs-200: 1.75rem;
    --fs-300: 2rem;

    --fs-body: var(--fs-100);
    --fs-heading: var(--ff-200);

    --border-radius: 1rem;
    --container-padding: 2rem;
}

.chart-component__column::after {
    content: '$' attr(data-amount);

    position: absolute;
    z-index: 1;
    left: 50%;
    top: -3rem;
    opacity: 0;

    transform: translateX(-50%);

    padding: 0.5rem 1rem;
    background-color: var(--clr-neutral-400);
    border-radius: var(--_column-radius);
    color: var(--clr-neutral-100);

    transition: opacity .1s ease-in-out;
}
```
```js
function markHighestColumn(elements) {
    const highestColumn = elements.reduce((p,c) => {
        return c.dataset.amount > p.dataset.amount ? c : p;
    })

    highestColumn.classList.add("chart-component__column--highest")
}
```

### Continued development
- Responsive layout

### Useful resources

- Kevin Powell (https://www.youtube.com/@KevinPowell) - Showed me how you can organize the colors, fonts in variables. It made the development process much easier.

## Author
- Frontend Mentor - @DaniilGurski(https://www.frontendmentor.io/profile/DaniilGurski)
