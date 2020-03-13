import React from "react";

export class UserDetails extends React.Component {
  render() {
    let {person, about, hobby, skills} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div className="well profile">
              <div className="col-sm-12">
                <div className="col-xs-12 col-sm-8">
                  <h2>{person}</h2>
                  <p><strong>About: </strong>{about}</p>
                  <p><strong>Hobbies: </strong>{hobby}</p>
                  <p><strong>Skills: </strong>
                    {skills.map((skill, idx) => {
                      return (<span key={idx}>{skill}</span>)
                    })}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 text-center">
                  <figure>
                    <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-ProfileAvatar-2.jpg" alt="" className="img-circle img-responsive"/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
