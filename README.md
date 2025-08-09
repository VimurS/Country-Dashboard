# Country Dashboard

A responsive React application displaying country data fetched from the REST Countries API. Supports light/dark mode toggle with a modal showing detailed country information.

## Demo

https://country-dashboard-vimurs-projects.vercel.app/

---

## Features

- Search countries by name
- Responsive grid with 1/2/3 columns depending on screen size
- Dark/light mode toggle with sun and moon icons
- Modal popup showing languages, borders, maps, and other country details
- Styled using Tailwind CSS with custom dark mode support

---

## Assumptions and Limitations

- Data source is the public REST Countries API
- Theme preference (light/dark) is saved in browser localStorage
- No backend or authentication included; frontend-only application
- Responsive design tested on common screen sizes only

## Approach Notes

- React functional components with hooks (useState, useEffect, useMemo)
- Tailwind CSS with manual dark mode toggling via class on <html>
- Modal implemented via conditional rendering and fixed positioning
- Responsive grid layout using Tailwind’s grid utilities (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- Dark mode toggle button uses inline SVG icons for sun and moon


## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/VimurS/Country-Dashboard.git


2. Navigate to the project directory:

```cmd
cd country-dashboard


3. Install dependencies:

```cmd
npm install


4. Start the development server:

```cmd
npm run dev


Now the local server will run.  Open browser at  http://localhost:5173/
