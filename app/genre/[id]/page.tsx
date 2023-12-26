import React from 'react'
type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}

const GenrePage = ({params: {id}, searchParams: {genre}}: Props) => {
    console.log(id,genre)
  return (
    <div>Welcome to genre page: {id} {genre}</div>
  )
}

export default GenrePage