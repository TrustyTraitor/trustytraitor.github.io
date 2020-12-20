/**Politely Asks github for list of repos */ 
const getRepos = async (url:string) =>
{
    const response = await fetch(url);
    return await response.json();
}

export default getRepos;