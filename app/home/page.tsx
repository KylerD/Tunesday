import { clerkService } from "@/lib/ClerkService";
import { Nav } from "./components/nav";
import { spotifyService } from "@/lib/SpotifyService";
import { auth } from "@clerk/nextjs";
import { Device } from "@/models/device";

async function getUserDevices() {
  const { userId } = auth();

  if (!userId) {
    return
  }

  const spotifyAccessToken = await clerkService.getSpotifyOAuthToken(userId);

  //TODO: What to do in this scenario?
  if (!spotifyAccessToken) {
    return
  }

  const devices: Device[] = await spotifyService.getUserDevices(spotifyAccessToken);
  console.log(devices);
}

export default function Home() {
  getUserDevices();
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-between p-24">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <button className="btn btn-primary">Start a session</button>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
