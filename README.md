# Button Component
The Button component is a reusable React component that provides a customizable button with various styles and onClick functionality. It allows you to create visually appealing buttons with ease.

## Usage
To use the Button component, follow these steps:

Install the necessary dependencies by running npm install or yarn install.

### Import the Button component into your desired file:

```jsx
import Button from './Button';
```
### Create a Button component instance with the desired props:
```jsx
<Button
  buttonText="Button Text"
  buttonStyle="red"
  onClick={handleClick}
/>
```
### Customize the button by adjusting the props:
buttonText (string): The text to display on the button.
buttonStyle (string): The background color of the button. You can use any valid CSS color value.
onClick (function): The function to execute when the button is clicked.
