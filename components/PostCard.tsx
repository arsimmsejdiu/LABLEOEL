import React from 'react'

interface PostCardProps {
  title?: string
  excert?: string
}

const PostCard = ({ title, excert }: PostCardProps) => {
  return (
    <div>
      {title}
      {excert}
    </div>
  )
}

export default PostCard
