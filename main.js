$(document).ready(function() {
    const endpoint = `https://api.github.com/users/ArthWeber`;
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    fetch(endpoint).then(function(res) {
        return res.json();
    })
    .then(function(json) {
        const nameElement = json.name;
        const usernameElement = json.login;
        const avatarElement = json.avatar_url;           
        const reposElement = json.public_repos          
        const followersElement = json.followers 
        const followingElement = json.following 
        const linkElement = json.html_url     
    })
})
























// document.addEventListener('DOMContentLoaded', function() {
//     const nameElement = $('#name').val();;
//     const usernameElement = $('#username').val();;
//     const avatarElement = $('#avatar').val();;
//     const reposElement = $('#repos').val();;
//     const followersElement = $('#followers').val();;
//     const followingElement = $('#following').val();;
//     const linkElement = $('#link').val();;

//     fetch('https://api.github.com/users/ArthWeber')
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(json) {
//             const nameElement = json.name;
//             const usernameElement = json.login;
//             const avatarElement = json.avatar_url;           
//             const reposElement = json.public_repos          
//             const followersElement = json.followers 
//             const followingElement = json.following 
//             const linkElement = json.html_url     
//         })
// })