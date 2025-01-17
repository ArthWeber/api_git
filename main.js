document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/ArthWeber')
        .then(function(res) {
            if (!res.ok) { //Verifica se a resposta foi bem-sucedida
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;           
            reposElement.innerText = json.public_repos          
            followersElement.innerText = json.followers 
            followingElement.innerText = json.following 
            linkElement.href = json.html_url     
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao carregar o perfil, tente mais tarde." + erro)
        })      
    })