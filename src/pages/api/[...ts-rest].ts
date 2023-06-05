// A single file implementing all the routes for the API, delegating the implementation
// to a specialized service (use case)
import { createNextRoute, createNextRouter } from '@ts-rest/next'

import { api } from '@/contract'
import { GetPosts } from '@/services/posts/get-posts'

const router = createNextRoute(api, {
  posts: {
    getPosts: async () => {
      const body = await GetPosts.instance.execute()
      return { status: 200, body }
    }
  }
})

export default createNextRouter(api, router)
