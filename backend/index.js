const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // or any port you prefer

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies if needed
app.use(express.json());

// Define your route
app.get('/fetch-data', async (req, res) => {
    // List of event strings
    const events = [
        "Introduction%20to%20Python%20Workshop",
        "Introduction%20to%20Flask",
        "Intro%20to%20Figma",
        "Typeracer",
        "Building%20AI-Powered%20Apps%20with%20OpenAI",
        "Saturday%20Lunch",
        "Club%20fair",
        "Github%20CoPilot%20(MLH)",
        "Arduino%20and%20Servos%20Workshop%20(VTCro)",
        "Panel%20Discussion",
        "UX%20Event%20(MLH)",
        "How%20to%20Run%20A%20Hackathon",
        "Energy%20Drink%20Pong%20(Peraton)"
    ];
    
    // Base URL format
    const baseURL = "https://checkin-express.onrender.com/checkin";
    
    // Variables for user and numTickets
    const user = "B5LQeR";
    const numTickets = 1;
    
    // Function to try GET requests sequentially
    async function tryRequests() {
        for (const event of events) {
        const url = `${baseURL}/${event}/${user}/${numTickets}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET', // or 'POST' if needed
                headers: {
                    'x-api-Key': 'yIljPLJRQsDxeCFXBy1jxPE0BO2IghN4zd6cFUQt14CUv33l37HFYFZG8YHQcADGv93z4ePtMs4fHV3dD32AfNokTyj5TdTEYClEyBBlCvBpLKgStufpcvWGsyvYeThS',
                },
            });
            
            if (response.ok) {
            const data = await response.text(); // or response.json() if the server returns JSON
            console.log(`Success for event: ${event}`);
            console.log("Response:", data);
            break; // Stop after the first successful request
            } else {
            console.log(`Failed for event: ${event}, Status: ${response.status}`);
            }
        } catch (error) {
            break;
            console.error(`Error for event: ${event}`, error);
        }
        }
    }
    
    // Run the function
    // tryRequests();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
