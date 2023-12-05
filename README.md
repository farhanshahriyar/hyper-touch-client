## HyperTouch Fashionable Website.

Hypertouch Fashion is a website where people can see brand cloths which was imported from Nike, Adidas, Puma etc. 

## Features

- **Secure Authentication:**  Firebase authentication is incorporated to ensure secure user logins.

- **Responsive Navigation:**  A navigation bar that adjusts according to the viewport size. For mobile devices, it switches to a hamburger menu.

- **Profile Management:**  Logged-in users have access to a dropdown menu where they can view their email or log out.

- **Dynamic Pricing Page:** The pricing page is dynamic in nature. It checks if a user is logged in before allowing them to purchase clothes.


## Usage


**Header Component:**

This component acts as the main navigation for the website.
Dynamically updates navigation highlights based on the current route.
Allows users to log in or log out.

**PricePage Component:**

Displays ticket information and pricing.
Logged-in users can purchase clothes. If not logged in, it redirects to the login page.
Showcases exclusive perks for clothes holders.

**Register Component:**

- **Separation of Concerns:** It's always a good practice to keep the event handlers and Firebase-related logic separate from the component render method. Consider breaking the handleRegister function out into its own module or custom hook.

- **Error Handling:** You have error messages displayed using the toast component, which is great. However, consider providing a clearer explanation to users about why their chosen password isn't valid.

- **Refactoring:** Instead of using direct e.target.email.value and e.target.password.value, you can utilize React's controlled components pattern. This means that you can have a state for email and password and update them using onChange event. This will also make validations and other manipulations easier.

- **Accessibility:** Ensure your form components have the necessary aria attributes for better accessibility. For example, error messages should have an appropriate role="alert" to notify screen readers.

- **Styling and UX:** Consider giving feedback to the user when the form is being submitted. A simple loading spinner or changing the button text to "Registering..." can give instant feedback.

- **Security:** Storing user information directly in localStorage can be a security concern. If this data isn't necessary for other parts of your app, consider skipping this step. If you need persistent sessions, Firebase manages this for you.

- **Navigation:** For the navigation link at the bottom ("Already a member?"), consider using a component from react-router-dom like <Link> instead of the traditional <a> to prevent full page reloads.

## Technology

**React:** Frontend library to build the UI.

**TailwindCSS:** Design

**Firebase:** For user authentication.

**@headlessui/react:** For creating the dropdowns and other UI components.

**@heroicons/react:** For rendering SVG icons.

**react-router-dom:** To handle routing.

**swal toast:** For toast notifications.

## Note
Please reload if you see error page.


## Live Link :
Check out the live project [here](https://hypertouchfashion.netlify.app).








## Installation

```bash
  npm i or install
```


    
