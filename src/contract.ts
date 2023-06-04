import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string()
})

export const posts = c.router({
  getPosts: {
    method: 'GET',
    path: '/posts',
    responses: {
      200: z.array(PostSchema)
    },
    summary: 'Get all posts'
  }
})

export const api = c.router({
  posts
})
