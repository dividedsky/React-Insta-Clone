import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import { Heart, MessageCircle } from "react-feather";
import PropTypes from "prop-types";
import { StyledPost, UserDiv, IconBar, Thumbnail, UserName, TimeStamp, LikeCounter } from "../Styles.js";
import moment from "moment";

class PostContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      post: props.post,
      username: props.username,
    };
  }

  render() {
    return (
      <div>
        <StyledPost>
          <UserDiv>
            <Thumbnail
              src={this.state.post.thumbnailUrl}
              alt=""
            />
            <UserName> {this.state.post.username} </UserName>
          </UserDiv>
          <img src={this.state.post.imageUrl} alt="" />
          <IconBar>
            <Heart onClick = {() => {this.props.increaseLikes(this.props.id)}} />
            <MessageCircle />
          </IconBar>
          <LikeCounter>{this.props.post.likes} likes</LikeCounter>
          <CommentSection comments={this.state.post.comments} username={this.state.username}/>
          <TimeStamp>{moment(this.state.post.timestamp, "MMMM Do YYYY, h:mm:ss").fromNow()}</TimeStamp>
        </StyledPost>
      </div>
    );
  }
}

PostContainer.propTypes = {
  index: PropTypes.number,
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
  }),
  username: PropTypes.string,
  increaseLikes: PropTypes.func,
}

export default PostContainer;


