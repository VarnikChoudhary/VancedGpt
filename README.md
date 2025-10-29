# VanceGPT

VanceGPT is a web application built with React and Vite that integrates Google's Generative AI (Gemini) to provide an AI chat interface.

## Features

- Interactive chat interface
- Integration with Google's Gemini AI model (gemini-1.5-flash)
- Real-time AI responses
- Custom configuration for AI responses
- Modern React components structure

## Project Structure

```plaintext
vancegpt/
├── src/
│   ├── Components/
│   │   ├── Main/
│   │   └── Sidebar/
│   ├── Context/
│   │   └── Context.jsx
│   ├── config/
│   │   └── vance.js
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository

2. Navigate to the project directory:

   ```bash
   cd vancegpt
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment:
   - Get your Google Generative AI API key
   - Configure the API key in `src/config/vance.js`

## Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Configuration

The AI model configuration can be found in `src/config/vance.js`. Current settings:

- Model: gemini-1.5-flash
- Temperature: 1
- Top P: 0.95
- Top K: 40
- Max Output Tokens: 8192

## Dependencies

- React
- Vite
- @google/generative-ai
- Additional dependencies can be found in `package.json`

## Security Note

⚠️ Remember to keep your API keys secure and never commit them directly to version control.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
