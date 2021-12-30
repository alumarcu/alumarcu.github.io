import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {Hello} from 'Components/Header'
import {Menu} from 'Components/Menu'
import {Photo, Bio} from 'Components/Sidebar'





function Layout() {
    return <Container maxWidth="md">
        <Grid container spacing={1}>
            <Grid container item sm={8} xs={12}>
                <Grid item xs={12}><Hello/></Grid>
                <Grid item xs={12}><Menu/></Grid>
            </Grid>
            <Grid container item sm={4} xs={12}>
                <Grid item xs={12}><Photo/></Grid>
                <Grid item xs={12}><Bio/></Grid>
            </Grid>
        </Grid>
    </Container>
}

export {Layout}
