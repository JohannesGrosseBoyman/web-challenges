// Implement the launch sequence function here and export it as the default export.
import {NFSAT, FISHSAT} from "./payload/satellites.js";
import { loadPayload } from "../js/core/load.js";
import { fuel } from "../js/core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
    // Load the Payload
    loadPayload(NFSAT,);
    loadPayload(FISHSAT);

    // Fueling
    fuel();

    // Countdown 
    while (rocket.countdown < 5) {
        countdown();
    }

    // Liftoff
    liftoff();

    // Deploy Payload
    deployPayload();

    
}


