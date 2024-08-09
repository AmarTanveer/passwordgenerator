# Password Generator App

A simple yet effective password generator application built with React. This app allows users to generate random passwords based on their preferences, including length, inclusion of special characters, and numbers. 

## Features

- **Password Length:** Adjust the length of the password using a slider, with a range from 6 to 50 characters.
- **Special Characters:** Option to include or exclude special characters (e.g., `!@#$%^&*()`).
- **Numbers:** Option to include or exclude numbers in the password.
- **Copy to Clipboard:** Generated passwords can be easily copied to the clipboard with a single click.

## Demo



## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AmarTanveer/passwordgenerator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd passwordgenerator
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5173/` to view the app.

## Usage

1. **Set Password Length:** Use the slider to select the desired password length.
2. **Include Special Characters:** Check the "Character" checkbox to include special characters in the password.
3. **Include Numbers:** Check the "Number" checkbox to include numbers in the password.
4. **Generate Password:** The password will be generated automatically as you adjust the settings.
5. **Copy Password:** Click the "Copy" button to copy the generated password to your clipboard.

## Code Overview

The core logic of the password generator is in the `generatePassword` function, which updates the password based on the current state of the length, special characters, and numbers.

```javascript
function generatePassword() {
  let pass = "";
  let str = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (isCharacter) {
    str += "!@#$%^&*()";
  }
  if (isNumber) {
    str += "1234567890";
  }
  for (let i = 0; i < length; i++) {
    let charIndex = Math.floor(Math.random() * str.length);
    pass += str.charAt(charIndex);
  }
  setPassword(pass);
}
```