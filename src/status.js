function Status(props) {
  return (
    <div className="status">
      <div className="user-info">
        {/* <img src="https://ga-core.s3.amazonaws.com/cms/files/files/000/000/886/original/ga-logo-gear.png" alt="General Assembly Logo" className="profile-pic" /> */}
        <img src={props.picture} className="profile-pic"></img>
        <div className="user-text">
          <p>{props.username}</p>
          <p>{props.date}</p>
        </div>
      </div>
      <p className="status-text">
        {props.status}
      </p>
      <hr/>
      <div className="reaction-bar">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
  </div>
  )
};

export default Status;