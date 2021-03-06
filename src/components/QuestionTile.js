import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Grid, TableCell, TableBody, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


const styles = {
    root: {
        maxWidth: 450,
        margin: 8
    },
}



class QuestionTile extends Component {

    render() {

        const { question, classes, users } = this.props
        const user = users[question.author]

        return (


            <Card className={classes.root}>
                <CardHeader
                    title={user.name + " asks:"}
                >
                </CardHeader>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Container>
                            <Avatar alt={user.name} src={user.avatarURL} />
                        </Container>
                    </Grid>
                    <Grid item xs={8}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Would You Rather
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            ...{question.optionOne.text}...
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Link style={{ textDecoration: 'none' }} to={`/questions/${question.id}`}>
                                                <Button type="submit" variant="outlined" color="primary" fullWidth >
                                                    View Poll
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Card>
        )
    }

}

QuestionTile.propTypes = {
    question: PropTypes.object.isRequired
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default withStyles(styles)(connect(mapStateToProps)(QuestionTile))