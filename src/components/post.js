import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <article className="picture-post">                
              <header className="post-owner">
                Pepito
              </header>
              <div className="picture">
                <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141_960_720.jpg" />
              </div>
              <div>
                <div className="comments">
                  <div className="comment">
                    <h2>Pepito</h2> <span>First test post #noregreats</span>
                  </div>
                  <div className="comment">
                    <h2>Hector</h2> <span>Bruh</span>
                  </div>
                  <div className="comment">
                    <h2>Mamá</h2> <span>When are you gonna call me?</span>
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
