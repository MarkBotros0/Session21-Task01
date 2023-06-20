import React, { createContext, useState } from 'react';

const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [post, setPost] = useState('');

    const updatePost = (value) => {
        setPost(value);
    };

    return (
        <PostContext.Provider value={{ post, updatePost }}        >
            {children}
        </PostContext.Provider>
    );
};

export { PostContext, PostProvider };
