import Layout from "../../commponents/layout";

import { getIds, getPostsById } from '../../lib/posts'

export const getStaticPaths = async () => {
    return {
        paths: getIds(),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostsById(params.id)
        }
    }
}

export default function Post({ post }) {
    return (
        <Layout pageTitle={'Article'}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Layout>
    )
}