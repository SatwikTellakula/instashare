import {Component} from 'react'

import Cookies from 'js-cookie'

import Post from '../Post'

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const url = 'https://apis.ccbp.in/insta-share/posts'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.posts.map(post => ({
        postId: post.post_id,
        userId: post.user_id,
        userName: post.user_name,
        profilePic: post.profile_pic,
        postDetails: post.post_details,
        likesCount: post.likes_count,
        comments: post.comments,
        createdAt: post.created_at,
      }))
      this.setState({posts: updatedData})
    }
  }

  render() {
    const {posts} = this.state
    return (
      <>
        {posts.map(postDetails => (
          <Post postData={postDetails} />
        ))}
      </>
    )
  }
}

export default Posts
