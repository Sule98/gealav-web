export function formatDate(
  input: string,
  format: "long" | "short" = "long"
): string {
  const date = new Date(input);
  if (format === "long") {
    return date.toLocaleDateString("es-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }
  return date.toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

export function getPlaceholderImage(width = 1366, height = 768) {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${randomId}/${width}/${height}`;
}

// Define a type for the function's return value if you like
interface AccessToken {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

// The fetchAccessToken function
export const fetchAccessToken = async (): Promise<AccessToken> => {
  const clientId = process.env.DRUPAL_CLIENT_ID;
  const clientSecret = process.env.DRUPAL_CLIENT_SECRET;
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`;

  if (!clientId || !clientSecret) {
    throw new Error(
      "DRUPAL_CLIENT_ID or DRUPAL_CLIENT_SECRET is not defined in the environment variables"
    );
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "nextjs", // Specify scopes if necessary.
    }),
  });

  if (!response.ok) {
    throw new Error(`Error fetching access token: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in,
    tokenType: data.token_type,
  };
};
