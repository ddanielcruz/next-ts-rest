import Head from 'next/head'

import { client } from '@/client'

export default function Home() {
  const { isLoading, data } = client.posts.getPosts.useQuery(['posts'])
  console.log({ isLoading, data })

  return (
    <main className="h-screen w-full bg-slate-800">
      <Head>
        <title>Next.js + ts-rest</title>
      </Head>

      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl w-full mx-auto p-8 gap-4">
        {data?.body.map(post => (
          <div key={post.id} className="bg-slate-700 p-4 rounded shadow-sm text-white">
            <h1 className="font-bold">{post.title}</h1>
            <span className="opacity-80">{post.body}</span>
          </div>
        ))}
      </section>
    </main>
  )
}
