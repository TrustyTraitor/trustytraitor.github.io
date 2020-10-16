function getRepos() {
    fetch('https://api.github.com/users/Dovahkid/repos')
        .then((response) => response.json())
        .then((data) => data.forEach(displayRepos))
        .catch((err) => console.log(err));
}
function displayRepos(item) {
    let appendClassList = (object, classes) => classes.forEach((item) => object.classList.add(item));
    let appendChildren = (object, classes) => classes.forEach((item) => object.appendChild(item));
    let container = document.getElementById("projectsContainer");
    let container_fragment = document.createDocumentFragment();
    let colDiv = document.createElement('div');
    appendClassList(colDiv, ["col-sm-12", "col-md-6", "col-lg-4"]);
    let card = document.createElement('div');
    appendClassList(card, ["card", "mb-4", "mr-1"]);
    let card_body = document.createElement('div');
    appendClassList(card_body, ["card-body", "d-flex", "flex-column"]);
    let card_title = document.createElement("h4");
    appendClassList(card_title, ["card-title"]);
    card_title.innerHTML = item.name;
    let card_subtitle = document.createElement('h6');
    appendClassList(card_subtitle, ["card-subtitle"]);
    card_subtitle.innerHTML = `${item.language}`;
    let card_text = document.createElement('p');
    appendClassList(card_text, ["card-text"]);
    card_text.innerHTML = `${item.description}`;
    let list_group = document.createElement('ul');
    appendClassList(list_group, ["list-group", "list-group-flush", "mt-auto"]);
    let repo_item_link = document.createElement('li');
    appendClassList(repo_item_link, ["list-group-item"]);
    list_group.appendChild(repo_item_link);
    let repo_link = document.createElement('a');
    appendClassList(repo_link, ["card-link"]);
    repo_link.innerHTML = "Repo here";
    repo_link.setAttribute("target", "_blank");
    repo_link.setAttribute("href", item.svn_url);
    repo_item_link.appendChild(repo_link);
    if (item.homepage != "") {
        let repo_website = document.createElement('a');
        appendClassList(repo_website, ["card-link", "mt-auto"]);
        repo_website.innerHTML = "Site here";
        repo_website.setAttribute("target", "_blank");
        repo_website.setAttribute("href", item.homepage);
        repo_item_link.appendChild(repo_website);
    }
    container_fragment.appendChild(colDiv).appendChild(card).appendChild(card_body);
    appendChildren(card_body, [card_title, card_text, card_subtitle, card_text, list_group]);
    container.appendChild(container_fragment);
}
//# sourceMappingURL=getRepos.js.map