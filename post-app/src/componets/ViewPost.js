import React, {Component } from 'react';
import './ViewPost.css';

class ViewPost extends Component{

    createPost = (post) => {
        if (post.title !== ''){
        return <div className='main' key={post.id}>
            <h2 className="title">{post.title}</h2>
            <p>{post.shortTitle}</p>
            <div>
            <img className='main-img' src={post.imgPath} alt={post.imgDescription}/>
            <span className='text'>{post.description}</span>
            </div>
            <button onClick={() => this.removePost(post)}>Usuń post</button>
        </div>
    }
    }
    removePost = (post) => {
        this.props.deletePost(post.id)
    }
    render(){
        let allPost = this.props.post
        let onePost = allPost.map(this.createPost)
        return <div>
            {onePost}

        </div>
    }
}

export default ViewPost