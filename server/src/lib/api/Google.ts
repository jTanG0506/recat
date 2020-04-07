import { google } from "googleapis";
import { createClient, AddressComponent } from "@google/maps";

const auth = new google.auth.OAuth2(
  process.env.G_CLIENT_ID,
  process.env.G_CLIENT_SECRET,
  `${process.env.PUBLIC_URL}/login`
);

const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile"
];

const maps = createClient({ key: `${process.env.G_GEOCODE_KEY}`, Promise });

const parseAddress = (addressComponents: AddressComponent[]) => {
  let country = null;
  let admin = null;
  let city = null;

  for (const component of addressComponents) {
    if (component.types.includes("country")) {
      country = component.long_name;
    } else if (component.types.includes("administrative_area_level_1")) {
      admin = component.long_name;
    } else if (component.types.includes("locality") || component.types.includes("postal_town")) {
      city = component.long_name;
    }
  }

  return { country, admin, city };
}

export const Google = {
  authUrl: auth.generateAuthUrl({
    access_type: "online",
    scope: scopes
  }),
  login: async (code: string) => {
    const { tokens } = await auth.getToken(code);
    auth.setCredentials(tokens);

    const { data } = await google.people({ version: "v1", auth }).people.get({
      resourceName: "people/me",
      personFields: "emailAddresses,names,photos"
    });

    return { user: data };
  },
  geocode: async (address: string) => {
    const res = await maps.geocode({ address }).asPromise();

    if (res.status < 200 || res.status > 299) {
      throw new Error("Failed to geocode address");
    }

    return parseAddress(res.json.results[0].address_components);
  }
}
