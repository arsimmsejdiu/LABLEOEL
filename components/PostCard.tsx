import React from 'react'

const PostCard = ({ post }: any) => {
  return (
    <div>
      {post.title}
      {post.excert}
    </div>
  )
}

export default PostCard
