import React, {Component} from 'react';

class userItem extends Component {
  //adding state
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    home_url: 'https://github.com/mojombo',
  };

  render () {
    //   destructuring
    const {login, avatar_url, home_url} = this.state;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          alt=""
          style={{width: '60px'}}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={home_url}
            className="btn btn-dark btn-sm my-1"
            style={{borderRadius: '5px'}}
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default userItem;
