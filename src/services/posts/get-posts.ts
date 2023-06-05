// A class implementing the use case for listing posts, returning exactly the data defined in the contract
import { Post } from '@/contract/resources/posts'

export class GetPosts {
  private static _instance: GetPosts

  public static get instance(): GetPosts {
    return this._instance || (this._instance = new this())
  }

  async execute(): Promise<Post[]> {
    return [
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
