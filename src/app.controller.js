import dotenv from 'dotenv'
// import path from "path";
import checkConnectionDB from './DB/connectionDB.js';
import registrationRouter from './modules/registration/registration.controller.js';

// const envPath = path.resolve("src", "config", ".env")

// dotenv.config({ path: envPath })
dotenv.config({})

const port = process.env.PORT || 5000;

const bootstrap = async (app, express) => {

    checkConnectionDB();

    app.use(express.json());

    app.use("/registration", registrationRouter); // msh mofeda hna awe 3lshan 3ndna module wa7d bs 

    // Define a route
    app.get('/', (req, res) => {
        res.send('Welcome to the Express.js Tutorial');
    })

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    })


}


export default bootstrap
