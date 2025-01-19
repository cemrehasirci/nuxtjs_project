// stores/useBlogStore.ts
import { defineStore } from 'pinia'

interface BlogPost {
  id: number
  title: string
  content: string
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [] as BlogPost[],
  }),
  actions: {
    addPost(post: BlogPost) {
      this.posts.push(post)
    },
    removePost(postId: number) {
      this.posts = this.posts.filter(post => post.id !== postId)
    },
  },
})
