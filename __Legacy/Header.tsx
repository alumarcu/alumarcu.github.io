import React from 'react'
import './Header.css'
import Typography from '@material-ui/core/Typography'
//import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import content from './Content/Header.js'

//const queryClient = new QueryClient()

// class API {
//     static readonly GITHUB_ME = 'https://api.github.com/users/alumarcu'
// }

function GithubUser() {
    console.log(content)

    // const result = useQuery('gh_user', () =>
    //     fetch(API.GITHUB_ME).then(res => res.json())
    // )

    // if (result.isLoading || result.error) return null

    return (
        <div>
            <Typography variant="h3">dsds</Typography>
            <Typography variant="h5">asdasd</Typography>
        </div>
    )
}

class Header extends React.Component {
    render() {
        return (
            <div>

                <GithubUser />
            </div>
        )
    }
}

export default Header
