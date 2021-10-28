import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs(props) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs style={{ padding:'5px' }} aria-label="breadcrumb">
        <Link style={{ fontSize: '0.9em' }} underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link
          style={{ fontSize: '0.9em' }}
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Catalago
        </Link>
        <Typography color="text.primary">{props.search}</Typography>
      </Breadcrumbs>
    </div>
  );
}
