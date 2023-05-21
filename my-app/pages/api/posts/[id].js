import { posts } from '../../../posts'

export default function handler(req, res) {
  const id = req.query.id
  const post = posts.find((p) => p.id == id)
  if (post) {
    res.status(200).json(post)
  } else {
    res.status(404).json({ message: `Post with id ${id} not found` })
  }
}
