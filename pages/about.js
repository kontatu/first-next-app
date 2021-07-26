import Link from "next/link"
import Layout from "../commponents/layout"

export default function Home() {
    return (
        <>
            <Layout pageTitle="about">
                <h2>about</h2>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Layout>
        </>
    )
}