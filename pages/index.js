

import Layout from '../commponents/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home">
        <h2>Home</h2>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    </>
  )
}
