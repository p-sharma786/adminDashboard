import React from "react";
import {projects} from "../Data/projects.js"
import CodeIcon from '@mui/icons-material/Code';
import Typography from '@mui/material/Typography';

export default function Projects() {
return (
  <section id = "projects">
    <div>
      <div>
        <CodeIcon sx={{ fontSize: 40 }} /> 
        <h1>
          Apps i've built
        </h1>
        <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
        </Typography>
      </div>
      <div>
        {
          projects.map((project)=>
            <h1>{project.link} </h1>
          )
        }
      </div>
    </div>

  </section>

)
}
