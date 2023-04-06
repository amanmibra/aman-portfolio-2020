import React, { Component } from 'react';
import {
  Container,
  Image
} from 'semantic-ui-react';

import NavBar from './../components/navbar';

import * as btn from './../images/resume_menu_btn.png';

class Resume extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="page-body">
          <Container fluid textAlign="center">
            <iframe src="https://drive.google.com/file/d/12Hu-o_By8EYpcSXho0Wvk-n6TQOi9tL9/preview" width={"750px"} height={"1050px"} allow="autoplay"></iframe>
          </Container>
        </div>
      </div>
    );
  }

}

export default Resume;
