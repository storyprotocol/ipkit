import type { paths } from "@storykit/api-schema"
import createClient, { type Middleware } from "openapi-fetch"

const API_URL =
  process.env.STORYBOOK_OPENAPI_BASE_URL || process.env.NEXT_PUBLIC_OPENAPI_BASE_URL || process.env.OPENAPI_BASE_URL

const middleware: Middleware = {
  async onRequest({ request }) {
    request.headers.set("Content-Type", "application/json")
    return request
  },
}

export const apiClient = createClient<paths>({ baseUrl: API_URL })
apiClient.use(middleware)
