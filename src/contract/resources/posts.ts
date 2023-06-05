// File defining a contract for a specific resource, such as a Post.
import { z } from 'zod'
import { initContract } from '@ts-rest/core'

const c = initContract()

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string()
})

export type Post = z.infer<typeof PostSchema>

export const posts = c.router({
  getPosts: {
    method: 'GET',
    path: '/posts',
    summary: 'Get all posts',
    description: 'A beautiful description about this route',
    responses: {
      200: z.array(PostSchema)
    }
  }
})
