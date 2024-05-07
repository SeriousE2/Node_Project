import express from "express";

const app = express();

const PORT = 3005;

async function logNasaData() {
    const YOUR_DEMO_KEY = '';
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-01&end_date=2019-01-07&api_key=${YOUR_DEMO_KEY}`);
    const data = await response.json();

    // for ( let value of Object.values(data)) {
    //     for (let asteroid in Object.values(value)[0]) {
    //         console.log(asteroid)
    //     }
    // }

    let asteroids = Object.values(data).forEach((res) => {
        Object.values(res).forEach((res) => {
            console.log(res);
        });
        return true
    })


    console.log(asteroids);
}

logNasaData().catch();

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});