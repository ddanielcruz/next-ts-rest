import { api } from '@/contract'
import { createNextRoute, createNextRouter } from '@ts-rest/next'

const postsRouter = createNextRoute(api.posts, {
  getPosts: async _args => {
    return {
      status: 200,
      body: [
        {
          id: '1',
          title: 'Hello World',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: '2',
          title: 'Goodbye World',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    }
  }
})

export default createNextRouter(api, { posts: postsRouter })
