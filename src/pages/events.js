import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

import events from '../data/events.json'
import EventCardComponent from '../components/EventCardComponent'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class EventsPage extends Component {
  constructor(props) {
    super(props)
  }

  eventsGrid = classes => {
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {events.map((event, index) => (
            <EventCardComponent
              name={event.name}
              location={event.location}
              description={event.description}
              cover_img={event.cover_img}
            />
          ))}
        </Grid>
      </div>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <Layout>
        <SEO title="Events" />
        {this.eventsGrid(classes)}
      </Layout>
    )
  }
}

const eventsGrid = classes => {
  events.map((event, i) => (
    <div>
      {/* <EventCardComponent
      name={event.name}
      location={event.location}
      description={event.description}
      cover_img={event.cover_img} /> */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
    </div>
  ))
}

// query for all cover image - a cover image consist of a suffix "-cover"
const query = graphql`
  query {
    images: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/.*-cover.*/" } }
    ) {
      edges {
        node {
          relativePath
          name
        }
      }
    }
  }
`

export default withStyles(styles)(EventsPage)