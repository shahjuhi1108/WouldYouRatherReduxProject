import React, { Component } from 'react'
import PropTypes from 'prop-types'


class QuestionTile extends Component {

    render() {

        const { qid } = this.props

        return (
            <div>
                Question = {qid}
            </div>
        )
    }

}

QuestionTile.propTypes = {
    qid: PropTypes.string.isRequired
}

export default QuestionTile