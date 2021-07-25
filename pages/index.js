import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../commponents/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home">
        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    </>
  )
}
