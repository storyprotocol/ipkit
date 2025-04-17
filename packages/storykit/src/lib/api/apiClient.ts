import { STAGING_URL } from "@/constants/api"
import type { paths } from "@storykit/api-schema"
import createClient, { type Middleware } from "openapi-fetch"

const middleware: Middleware = {
  async onRequest({ request }) {
    request.headers.set("Content-Type", "application/json")
    return request
  },
}

export const apiClient = createClient<paths>({ baseUrl: STAGING_URL })
apiClient.use(middleware)
