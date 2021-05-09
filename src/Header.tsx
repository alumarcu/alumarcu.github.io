import React from 'react'
import './Header.css'
import Typography from '@material-ui/core/Typography'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

class API {
    static readonly GITHUB_ME = 'https://api.github.com/users/alumarcu'
}

function GithubUser() {
    const result = useQuery('gh_user', () =>
        fetch(API.GITHUB_ME).then(res => res.json())
    )

    if (result.isLoading || result.error) return null

    return (
        <div>
            <Typography variant="h3">{result.data.name}</Typography>
            <Typography variant="h5">{result.data.bio}</Typography>
        </div>
    )
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <QueryClientProvider client={queryClient}>
                    <GithubUser />
                </QueryClientProvider>
            </div>
        )
    }
}

export default Header
