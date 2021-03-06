import React, { Component } from 'react';
import { Link } from 'gatsby';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import BannerImage from '../commons/BannerImage';
import { primary, hoverPrimary, whiteSmoke } from '../../utils/Colors';

const styles = theme => ({
  root: {
    position: 'relative',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    padding: '4rem 2rem 4rem 2rem',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '8rem 6rem 8rem 6rem',
    },
  },
  bgImg: {
    position: 'absolute !important',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: '-1',
  },
  title: {
    color: whiteSmoke,
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '1.25em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.125rem',
      lineHeight: 1.5,
    },
  },
  description: {
    marginBottom: 50,
    color: whiteSmoke,
    textAlign: 'justify',
    fontSize: '0.9rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
  },
  btn: {
    backgroundColor: primary,
    color: 'white',
    marginBottom: 10,
    padding: '8px 24px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: hoverPrimary,
    },
    [theme.breakpoints.up('md')]: {
      padding: '10px 30px',
    },
  },
  links: {
    textDecoration: 'none',
    color: 'black',
  },
  a: {
    color: 'white',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.5)',
    },
  },
});

class CapComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BannerImage
          filename={'events/upstars-001/20171104_130347_cover.jpg'}
          classProps={classes.bgImg}
        />
        <Typography variant="h4" className={classes.title}>
          CAP
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Welcome to the CAP program by SoC Student Life under its Code for
          Community project. The #socFamily team is very excited that you have
          found us!
          <br />
          <br />
          CAP - Code to Achieve Potential is a program designed in collaboration
          with{' '}
          <a href="https://www.autism.org.sg" className={classes.a}>
            Autism Resource Centre, Singapore
          </a>{' '}
          to create code specific learning opportunities for youth with Autism.{' '}
          <br />
          <br />
          We want YOU to teach coding to ARC students to help them improve their
          employability. So let’s get started on this awesome journey!
        </Typography>
        <Link to={'/join-us'} className={classes.links}>
          <Button className={classes.btn}>Join Us</Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(CapComponent);
