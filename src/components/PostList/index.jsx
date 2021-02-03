import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
}



function PostList(props) {
    const { posts } = props;

    const [postList, setPostList ] = useState([]);

    useEffect(() => {
        async function fetchPostList(){
            try {
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const {data} = responseJSON;
                setPostList(data);
            } catch (error) {
                console.log('Failed to Fetch');
            } 
        }

        fetchPostList();
    }, [ ]);

    return (
        <ul className="post-list">
            {postList.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;