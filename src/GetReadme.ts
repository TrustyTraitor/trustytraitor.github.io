const GetReadme = async (url: string) =>
    await fetch(url)
    .then(async (response: Response): Promise<string> =>
        await response.text()
    )
    .catch((error) =>
        "Failed to retrieve README"
    )

export default GetReadme;