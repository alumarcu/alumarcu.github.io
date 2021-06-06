import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Component, FunctionComponent } from 'react'


//TODO: look into: https://github.com/inversify/InversifyJS
function Layout() {
    return <Container maxWidth="md">
        <Grid container spacing={1}>
            <Grid item sm={8} xs={12}>Hello</Grid>
            <Grid item sm={4} xs={12}>World!!</Grid>
        </Grid>
    </Container>
}

export default Layout
