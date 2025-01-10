import express from "express"
const app = express();
// I am importing EXPRESS into my server file on line 1 and 'turning it on' with line 2. 

import cors from "cors";
app.use(cors());
// Same principle before but with CORS this time.

app.use(express.json());
// I am telling my EXPRESS server that I want it to use JSON).

app.listen(8080, () => {
    console.log('Express server is running on port 8080');
});

// writing some dummy text so I can gitpush


