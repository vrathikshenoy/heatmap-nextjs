md
# heatmap-nextjs

A Next.js project for visualizing heatmap data using Google Maps.

## Key Features & Benefits

*   Displays heatmap data on a Google Map.
*   Utilizes Next.js for server-side rendering and improved performance.
*   Leverages React Google Maps API for seamless integration.
*   Styled with Tailwind CSS for a modern and responsive design.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:**  (v18 or higher) -  [https://nodejs.org/](https://nodejs.org/)
*   **npm** (Node Package Manager) or **yarn** or **pnpm** or **bun**

## Installation & Setup Instructions

Follow these steps to set up the project:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/vrathikshenoy/heatmap-nextjs.git
    cd heatmap-nextjs
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

    Using pnpm:

    ```bash
    pnpm install
    ```

    Using bun:
    ```bash
    bun install
    ```

3.  **Configure Google Maps API Key:**

    *   Obtain a Google Maps API key with the Maps JavaScript API and the Maps JavaScript API  enabled from the [Google Cloud Console](https://console.cloud.google.com/).
    *   Update the `app/page.js` file with your API key:

        ```js
        const { isLoaded } = useJsApiLoader({
          googleMapsApiKey: "YOUR_API_KEY",
          libraries: ['visualization']
        })
        ```

4.  **Run the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Using yarn:

    ```bash
    yarn dev
    ```

    Using pnpm:

    ```bash
    pnpm dev
    ```

    Using bun:
    ```bash
    bun dev
    ```

5.  **Access the application:**

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Examples

This project utilizes the `@react-google-maps/api` library to display a heatmap. Here's a basic example of how to display a Heatmap:

```js
'use client'
import React from 'react'
import { GoogleMap, HeatmapLayer, useJsApiLoader ,Marker} from '@react-google-maps/api'

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY",
    libraries: ['visualization']
  })

  const data ={ lat: 37.782, lng: -122.445}
  const [map, setMap] = React.useState(null)
  const heat = [
    { lat: 37.782, lng: -122.445},
    { lat: 37.782, lng: -122.443 },
    { lat: 37.782, lng: -122.441 },
  ]
   

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '500px' }}
      center={data}
      zoom={12}
      onLoad={(map) => setMap(map)}
    >
        <HeatmapLayer data={heat} />
    </GoogleMap>
  )
}
```

## Configuration Options

The following files offer configuration options:

*   `next.config.mjs`:  Next.js configuration file.
*   `tailwind.config.js`: Tailwind CSS configuration file.
*   `jsconfig.json`:  JavaScript configuration file.
*   `app/globals.css`: Global CSS stylesheet for Tailwind configuration.

## Contributing Guidelines

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## License Information

This project does not have a specified license. All rights are reserved by the owner.

## Acknowledgments

This project utilizes the following open-source libraries:

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
*   [Tailwind CSS](https://tailwindcss.com/)
