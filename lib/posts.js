import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// process.cwd()で、node実行時のワーキングメモリ（ファイルの読み込みと保存）と'posts'を結合する
const postsDirPath = path.join(process.cwd(), 'posts')

export function getPosts() {

    // s.readdirSyncは、引数のパスのディテクトリないのファイルを配列として返す
    const postNames = fs.readdirSync(postsDirPath)

    return postNames.map(postName => {
        // .joinは配列を文字に変更する
        const postPath = path.join(postsDirPath, postName)

        // postファイルを読み込み、FronMatterを解析
        const result = matter(fs.readFileSync(postPath, 'utf8'))
        return result.data
    })
}

export function getIds() {
    const postNames = fs.readdirSync(postsDirPath)

    return postNames.map(postName => {
        return {
            params: {
                id: postName.replace(/\.md$/, '')
            }
        }
    })
}

export function getPostsById(id) {
    const postPath = path.join(postsDirPath, `${id}.md`)

    const result = matter(fs.readFileSync(postPath, 'utf8'))

    return {
        id,
        ...result.data,
        content: result.content
    }
}