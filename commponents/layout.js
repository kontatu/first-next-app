import Head from "next/head"

export default function Layout({ children, pageTitle }) {
    return (
        <div>
            <Head>
                <title>My blog | {pageTitle}</title>
            </Head>
            <h1>My Blog</h1>
            {children}
        </div>
    )
}