import React, {Component} from "react";

export default class Top extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section className="hero is-light is-fullheight">
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <div className="nav-item">
                    <h2 className="subtitle">GitHub Practice</h2>
                  </div>
                </div>
                <div className="nav-right"></div>
              </div>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">GitHub Practice</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
