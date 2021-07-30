import Layout from '../commponents/layout'
import Link from 'next/link'

import { getPosts } from '../lib/posts'

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts()
    },
  }
}



export default function Home({ posts }) {
  return (
    <>
      <Layout pageTitle="Home">
        <h2>Home</h2>
        <Link href="/about">
          <a>About</a>
        </Link>
        <ul>
          {
            posts.map(({ title }) => {
              return <li>
                {title}
              </li>
            })
          }
        </ul>
      </Layout>
    </>
  )
}
