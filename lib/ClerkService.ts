

class ClerkService {
  constructor(private clerkSecret: string) { }

  async getSpotifyOAuthToken(userId: string): Promise<string | null> {
    const accessTokenResp = await fetch(`https://api.clerk.com/v1/users/${userId}/oauth_access_tokens/oauth_spotify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${this.clerkSecret}`
      }
    })

    if (!accessTokenResp.ok) {
      return null
    }

    const accessToken = await accessTokenResp.json();

    if (accessToken.length === 0) {
      return null
    }

    return accessToken[0].token;
  }
}

export const clerkService = new ClerkService(process.env.CLERK_SECRET_KEY as string);
