import Link from "next/link"
import Layout from "../commponents/layout"

export default function Home() {
    return (
        <>
            <Layout pageTitle="Home">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Layout>
        </>
    )
}