import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <section id="about">
      <Grid container spacing={3} sx = { {width: '100vw',height: '100vh'}}>
        <Grid item md={6}>
          <div>
            <Typography variant="h4">
              Hi, I'm Reed.
              <br />I love to build amazing apps.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </Typography>
            <div>
              <Stack spacing={2} direction="row">
                <Button variant="contained" href="#contact">
                  <Typography variant="button">
                  Work with me
                  </Typography>
                </Button>
                <Button variant="outlined" href="#projects">
                  <Typography variant="button">
                  See my past work
                  </Typography>
                </Button>
              </Stack>
            </div>
          </div>
        </Grid>

        <Grid item md={6}>
          <img alt="hero" src="./img/download.jpg" />
        </Grid>
      </Grid>
    </section>
  );
}
