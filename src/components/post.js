import React from 'react'
import { lorem, internet } from 'Faker';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleRandomInteraction = this.handleRandomInteraction.bind(this);
        this.handleFollowUser = this.handleFollowUser.bind(this);
    }

    getRandomInteractions() {
      let interactions = [];
      for (let index = 0; index < Math.floor(Math.random() * 10) + 1 ; index++) {                        
        interactions.push(this.handleRandomInteraction());
      }
      return interactions;
    }

    handleRandomInteraction() {      
      let user = internet.userName();
      let comment = lorem.sentence();

      return {user, comment};
    }

    handleFollowUser(author) {
      this.props.follow(author);
    }


    render() {

      let {post:{description, tags, location, picture, download_url, author}, following} = this.props;

      console.log(picture);

        return (
            <article className="picture-post">                
              <header className="post-owner">
                {author}
                {following.find(f => f.user === author) ? <span>Following</span> : <button onClick={() => this.handleFollowUser(author)}>Follow</button>}                
              </header>
              <div className="picture">
                {download_url ? 
                <img src={download_url} alt={description}/>
                :                
                <img src={picture}/>
                }                
              </div>
              <div>
                <div className="comments">
                  <div className="comment">
                      <h2>{author}</h2> 
                      <span>{`
                        ${description ? description : ''}
                        ${tags ? tags.map(t => { console.log(t); return (<b>{`#${t} `}</b>) }) : ''}
                        ${location && location.city? location.country ? `@${location.city}, ${location.country}` : `@${location.city}` : ''}`}
                      </span>
                  </div>
                  <div className="comment">
                    {
                      // this.getRandomInteractions().map(i => {
                      //   return (
                      //     <React.Fragment>
                      //       <h2>{i.user}</h2> <span>{i.comment}</span>
                      //     </React.Fragment>
                      //   )
                      // })
                    }                                        
                  </div>                  
                </div>
                <hr />
                <section className="new-comment">
                  <form method="POST">
                    <textarea aria-label="Send comment..." placeholder="Send comment..." autoComplete="off" autoCorrect="off"></textarea>
                    <button>Send comment</button>
                  </form>
                </section>
              </div>
            </article>
        );
    }
}

export default Post;
