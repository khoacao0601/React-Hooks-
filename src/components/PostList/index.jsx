import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
    pageInfos: PropTypes.func,
};

PostList.defaultProps = {
    posts: [],
}



function PostList(props) {

    const [postList, setPostList ] = useState([]);
    const [pagination, setPagination ] = useState({});
    const { pageInfos } = props.pageInfos;
    console.log(pageInfos);

    useEffect(() => {
        async function fetchPostList(){
            try {
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const {data, pagination} = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to Fetch');
            } 
        }

        fetchPostList();
    }, [ ]);

    return (
        <ul className="post-list" pageInfos={pagination}>
            {postList.map(post => (<li key={post.id}>{post.title}</li>))}
        </ul>
    );
}

export default PostList;