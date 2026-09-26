🚀 Dev Stack Builder

A modern, interactive web application that allows developers to browse different technologies and build their ideal development stack based on their specific project needs.

📖 Description

The Dev Stack Builder provides a seamless way for developers to explore frontend, backend, database, and tooling options. Users can browse a curated list of technologies, add them to a personalized "Stack" sidebar, and manage their selections dynamically. It's a simple, clean, and highly responsive tool designed to help developers plan their next project architecture.

🛠️ Technologies Used

React - For building the interactive UI components.

TypeScript - For type safety and better developer experience.

Vite - For a fast and optimized development environment.

Tailwind CSS - For modern, responsive, and utility-first styling.

React Toastify - For beautiful, non-intrusive notification alerts.

JSON - Used as a local mock database to store and fetch technology data.

✨ 3 Key Features

Browse Development Technologies

Explore a wide range of technologies fetched dynamically from a JSON database, complete with descriptions, icons, ratings, and difficulty levels.

Build a Personalized Technology Stack

Select technologies from the grid and see them instantly appear in the "Your Stack" panel on the right side of the screen.

Add and Remove Technologies Dynamically

Easily add technologies to your stack, remove individual items, or clear the entire stack with a single click, all handled smoothly with React state.

❓ Frequently Asked Questions & Core React Concepts

1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside JavaScript files. It is used in React because it makes writing and understanding UI components much easier and more intuitive compared to standard JavaScript functions.

2. What is the difference between props and state?

Props (Properties): Read-only data passed down from a parent component to a child component. The child component cannot modify props directly.

State: Internal data created and managed within a component. State holds values that can change over time (e.g., user input or selected items), and when state changes, React re-renders the component.

3. What does the useState hook do, and where did you use it in this project?

The useState hook allows functional components to create and manage local state variables. In this project, useState is used to store and update the list of fetched technology data, manage the user's selected stack items (adding/removing technologies), and track loading states.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook handles side-effects in React components, such as fetching data from an external API or file. In this project, useEffect was used with an empty dependency array ([]) to automatically fetch technology data from the local JSON file as soon as the app component mounts on the screen.

5. Why does every item in a .map() list need a unique key prop?

React relies on the unique key prop to keep track of individual list items when changes occur (such as adding, updating, or deleting items). Unique keys help React re-render only the modified items instead of entire lists, optimizing application performance.

6. What is conditional rendering? Give an example from this project.

Conditional rendering means displaying different UI elements based on whether specific conditions are true or false. In this project, conditional rendering is used to display a loading indicator while data is being fetched, or to show an empty state message when the user hasn't added any items to their stack yet.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child: Data is passed down from parent to child through props (e.g., <TechCard technology={item} />).

Child to Parent: The parent passes a callback function down to the child as a prop. When an event occurs in the child component (such as clicking an "Add" button), the child invokes that callback function, passing data back up to the parent component as arguments.
