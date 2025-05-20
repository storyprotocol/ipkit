import { PRODUCTION_URL, STAGING_URL } from "@/constants/api"
import type { paths } from "@storykit/api-schema"
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
