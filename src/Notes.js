import React from 'react';
import { ListItem, List, ListItemText } from '@material-ui/core'

function Notes(props) {
	return (
		<List>
			<ListItem>
             	<ListItemText primary={props.text} secondary={props.timestamp}/>
            </ListItem>
		</List>
	)
  }

export default Notes;
