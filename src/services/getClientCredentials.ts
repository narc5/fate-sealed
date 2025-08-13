import { Credentials, authenticate, LeagueClient } from "league-connect";
import { authOptions } from "../types/lcu-types";

let credentials: Credentials;

// safety implications of GET?

export default async function getClientCredentials(): Promise<LeagueClient> {
    credentials = await authenticate(authOptions);

    const clientInstance = new LeagueClient(credentials, {
        pollInterval: authOptions.pollInterval as number
    }); 
    console.log(`Initial client instance found on port ${credentials.port}`);

    return clientInstance;
}