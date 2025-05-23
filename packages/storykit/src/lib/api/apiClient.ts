import { API_URL } from "@/constants/api"
import type { paths } from "@/types/schema"
import createClient, { Client, type Middleware } from "openapi-fetch"

const middleware: Middleware = {
  async onRequest({ request }) {
    request.headers.set("Content-Type", "application/json")
    return request
  },
}

export type ApiClient = Client<paths>

export const createApiClient = (baseUrl: string): Client<paths> => {
  const client = createClient<paths>({ baseUrl })
  client.use(middleware)
  return client
}

// utillities if someone wants to use the api requests without the StoryKitProvider
export const stagingClient = createApiClient(API_URL.STAGING)
export const prodClient = createApiClient(API_URL.PRODUCTION)
