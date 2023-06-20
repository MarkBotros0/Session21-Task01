import React, { useContext } from 'react'
import PostTitle from './PostTitle.js'
import PostContent from './PostContent.js'
import PostFooter from './PostFooter.js'
import { PostContext } from './PostProvider.js'
import { ThemeModeContext } from './ThemeProvider.js'
import { themes } from '../misc/themes.js'

const Post = () => {

    const { post } = useContext(PostContext);
    const { themeMode } = useContext(ThemeModeContext)

    return (
        <div style={{ backgroundColor: themes[themeMode].bgColor.app }}>
            <PostTitle post={post} />
            <PostContent post={post} />
            <PostFooter post={post} />
        </div>
    )
}

export default Post