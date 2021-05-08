import React from 'react'
import './Header.css'
import Typography from '@material-ui/core/Typography'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function GetGithubUser() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/users/alumarcu').then(res =>
            res.json()
        )
    )

    if (isLoading) return (
        <div>Wait..</div>
    )

    if (error) return (
        <div>An error has occurred!</div>
    )

    console.log(data)

    return (
        <div>
            <Typography variant="h3">{data.name}</Typography>
            <Typography variant="h5">{data.bio}</Typography>
        </div>
    )
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <QueryClientProvider client={queryClient}>
                    <GetGithubUser />
                </QueryClientProvider>
            </div>
        )
    }
}

export default Header
