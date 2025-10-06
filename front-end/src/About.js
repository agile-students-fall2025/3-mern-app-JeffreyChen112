// src/about.js
import { useEffect, useState } from 'react'

/**
 * A React component that represents the About Us page.
 * It retrieves its content (title, paragraphs, and image URL) from the backend /api/about route.
 * @returns The contents of this component, in JSX form.
 */
const About = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // fetch the About Us data from the backend when the component loads
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch('http://localhost:5002/api/about');
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error(err)
        setError('Failed to load About content.')
      }
    }
    fetchAbout()
  }, [])

  // display an error or loading message while waiting
  if (error) return <p>{error}</p>
  if (!data) return <p>Loading...</p>

  // once we have data, display it
  return (
    <article className="About-article">
      <h1>{data.title}</h1>
      <img
        src={data.imageUrl}
        alt="About"
        style={{
          width: '220px',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '50%',
          marginBottom: '1.5rem'
        }}
      />
      {data.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </article>
  )
}

// make this component available to be imported into any other file
export default About
