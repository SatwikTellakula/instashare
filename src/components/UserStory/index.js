const UserStory = props => {
  const {userData} = props
  const {userName, storyUrl} = userData
  return (
    <div>
      <img src={storyUrl} alt="" />
      <p>{userName}</p>
    </div>
  )
}

export default UserStory
