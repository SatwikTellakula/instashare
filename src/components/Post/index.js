import {BsHeart, BsHeartFill} from 'react-icons/bs'

import {FaRegComment} from 'react-icons/fa'

import {BiShareAlt} from 'react-icons/bi'

import {Link} from 'react-router-dom'

import {Component} from 'react'
import Cookies from 'js-cookie'

class Post extends Component {
  toggleLike = async () => {
    await this.setState(prevState => ({isLiked: !prevState.isLiked}))

    const {userPost} = this.props
    const {postId} = userPost
    const {isLiked} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const likedRequestBody = {
      like_status: isLiked,
    }

    const likedPostUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'POST',
      body: JSON.stringify(likedRequestBody),
    }

    const response = await fetch(likedPostUrl, options)
    const fetchedData = await response.json()

    console.log(fetchedData)
  }

  render() {
    const {postData} = this.props

    const {
      userId,
      userName,
      profilePic,
      postDetails,
      likesCount,
      comments,
      createdAt,
    } = postData

    const {isLiked} = this.state

    return (
      <div>
        <Link to={`/users/${userId}`} className="profile-link">
          <div>
            <img src={profilePic} alt="profilepic" />
            <p>{userName}</p>
          </div>
          <div>
            <img src={postDetails.image_url} alt="imageU" />
            <div>
              {!isLiked && (
                <button
                  type="button"
                  onClick={this.toggleLike}
                  className="user-post-button"
                >
                  <BsHeart size={20} color="#262626" />
                </button>
              )}
              <BsHeartFill size={20} color="red" />
              <FaRegComment size={20} color="#475569" />
              <BiShareAlt size={20} color="475569" />
            </div>
            <p>{likesCount} likes</p>
            <p>{postDetails.caption}</p>
            {comments.map(comment => (
              <p key={comment.user_id} className="comments">
                <span className="commented-user">{comment.user_name} </span>
                <span className="user-comment">{comment.comment}</span>
              </p>
            ))}
            <p className="created-date">{createdAt}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default Post
