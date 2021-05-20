import React from 'react';

const UserStories = () => {

    return (
        <div id="user-stories">
            <div className="container">
                <h1>User Stories!</h1>
                <div className="row">
                    <div className="col user-story">
                        <h5>"A great app that allows me to play with my friends"</h5>
                        <p>- John</p>
                    </div>
                    <div className="col user-story">
                        <h5>"Finally an app which tracks stats!!!"</h5>
                        <p>- Aaron</p>
                    </div>
                    <div className="col user-story">
                        <h5>"Great for a free app, would recommend to any player"</h5>
                        <p>- Faisal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserStories;