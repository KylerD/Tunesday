import { Device } from "@/models/device";

class SpotifyService {
  constructor() { }

  async getUserDevices(accessToken: string): Promise<Device[]> {
    const devicesResp = await fetch('https://api.spotify.com/v1/me/player/devices', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!devicesResp.ok) {
      console.log(await devicesResp.json());
      return []
    }

    return devicesResp.json();
  }

  async getArtistTest(accessToken: string): Promise<Device[]> {
    const artistResp = await fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPbs', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!artistResp.ok) {
      console.log(await artistResp.json());
      return []
    }

    return artistResp.json();
  }
}

export const spotifyService = new SpotifyService();
