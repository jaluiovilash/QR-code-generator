# iQR Code Generator

iQR Code Generator is a simple web application that generates QR codes using the QR Code API. This project demonstrates how to interact with an external API to create QR codes dynamically based on user input.

## Features

- Generate QR codes for any input text or URL.
- Display the generated QR code on the web page.
- Download the generated QR code image.

## Installation

### Prerequisites

- Web browser (Chrome, Firefox, etc.)
- Internet connection

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/iqr-code-generator.git
    ```

2. Navigate to the project directory:
    ```sh
    cd iqr-code-generator
    ```

3. Open `index.html` in your web browser.

## Usage

1. Enter the text or URL you want to encode in the input field.
2. Click the "Generate QR Code" button.
3. The generated QR code will be displayed on the screen.

## Code Overview

### HTML

The main structure of the web application, including input fields, buttons, and the QR code display area.

### CSS

Basic styling for the web application to ensure a clean and responsive design.

### JavaScript

Handles the interaction with the QR Code API, updates the DOM with the generated QR code, and includes functionality for downloading the QR code image.

### Example JavaScript Code Snippet

```javascript
function generateQRCode() {
    var input = document.getElementById('inputText').value;
    var qrImg = document.getElementById('qrImg');
    
    if (input) {
        var apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;
        qrImg.src = apiUrl;
        qrImg.style.display = 'block';
    } else {
        qrImg.style.display = 'none';
    }
}
```

Hope You Like It...
