import React from 'react';
import {Tab, Paper} from '@material-ui/core';
import {Tabs} from '@material-ui/core/';


export default ({muscles, onSelect, category}) => {
 const index = category ? muscles.findIndex(group => group === category) + 1 : 0
 const getOnchangeIndex = (e, index) => onSelect(index === 0 ? '': muscles[index - 1])

 return <Paper>
        <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={getOnchangeIndex}
        >
          <Tab label="All" />
          {muscles.map(group => <Tab key={group} label={group} />)}
        </Tabs>
      </Paper>
}
