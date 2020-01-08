import React, { Fragment } from "react";
import { Grid, Typography, Paper, List,ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    height:350,
    overflowY:"auto"
  }
};

export default ({exercises, category,onSelect, exercise: {id, title='Welcome!', description='Welcome To New Store'}}) => (
   <Grid container>
    <Grid item sm={4} xs={12}>
      <Paper style={styles.Paper}>

        {exercises.map(([group, exercises]) => (
          !category || category === group ? <Fragment key={group}>
          <Typography key={group} variant="headline" style={{ textTransform: "capitalize" }}>
            {group}
          </Typography>
          <List component="nav">
            {exercises.map(({id, title}) =>
            <ListItem button onClick={()=> onSelect(id)}>
              <ListItemText primary={title} />
            </ListItem>
            )}

          </List>
        </Fragment>: null

        ))}
      </Paper>
    </Grid>
    <Grid item sm={8} xs={12}>
      <Paper style={styles.Paper}>

          <Typography variant="display2">
           {title}
          </Typography>
          <Typography variant="subheading" style={{marginTop:20}}>
          {description}
          </Typography>
      </Paper>
    </Grid>
  </Grid>
);
