// Politely Asks github for my repos
const getRepos = async () =>
{
    const response = await fetch('https://api.github.com/users/Dovahkid/repos');
    return await response.json();
}

export default getRepos;