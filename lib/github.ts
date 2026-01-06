
export interface GitHubStats {
    repos: number;
    followers: number;
    following: number;
    stars: number;
}

export async function getGitHubStats(): Promise<GitHubStats> {
    const username = "DoSomethingGreat07";

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
            headers: process.env.GITHUB_TOKEN ? {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
            } : {}
        });

        if (!userResponse.ok) {
            console.warn('Failed to fetch user data', userResponse.statusText);
            return { repos: 50, followers: 0, following: 0, stars: 0 }; // Fallback
        }

        const user = await userResponse.json();

        // Fetch repos to calculate total stars
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            next: { revalidate: 3600 },
            headers: process.env.GITHUB_TOKEN ? {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
            } : {}
        });

        let stars = 0;
        if (reposResponse.ok) {
            const repos = await reposResponse.json();
            // Check if repos is an array before reducing
            if (Array.isArray(repos)) {
                stars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
            }
        }

        return {
            repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            stars: stars
        };
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        return { repos: 50, followers: 0, following: 0, stars: 0 };
    }
}
