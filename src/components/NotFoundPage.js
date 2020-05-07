import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';

class NotFoundPage extends React.Component {
  render() {
    return <div>
      <p style={{ textAlign: "center" }}>
        <Typography>
          This page doesn't exist.
          <br/>
                <Link to="/">Go to Home </Link>
        </Typography>

      </p>
    </div>;
  }
}

export default NotFoundPage