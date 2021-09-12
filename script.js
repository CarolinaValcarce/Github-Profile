const main=document.getElementById("main");
const search=document.getElementById("search");
const ApiUrl="https://api.github.com/users/";

getData("CarolinaValcarce");

async function getData(username){
	const resp= await fetch(ApiUrl+username);
	const DataResponse= await resp.json();

	// return DataResponse;
	getMain(DataResponse);
	getRepos(username);

}
async function getRepos(username){
  	const resp= await fetch(ApiUrl+username+"/repos");
  	const DataResponse= await resp.json();

 	getReposCard(DataResponse);

}

function getMain(user){

 	main.innerHTML=`<div class="container">
 					<img alt="${user.name}" src="${user.avatar_url}"/>
 					<div class="info">
 						<h4> ${user.name}  </h4>
 						<h5> ${user.bio} </h5>

 						<ul>
 							<li>Followers: ${user.followers}</li>
 							<li>Following: ${user.followings}</li>
 							<li>Repos: ${user.public_repos}</li>
 						</ul>	
 					</div>
 					<div id="repos"></div>
 				</div>`;

}

 
function getReposCard(repos){
  	const reposElm=document.getElementById("repos");
  	console.log(repos);
  	repos
  		.slice(0, 15)
 		.forEach((repo)=>{
 		const repoElm= document.createElement("a");
 		repoElm.classList.add("repo");

 		repoElm.href= repo.html_url;
 		repoElm.target= "_blank";
 		repoElm.innerText= repo.name;

 		reposElm.appendChild(repoElm);

 	});
}


form.addEventListener("submit",(e)=>{
	e.preventDefault();
	const user=search.value;

	if(user){
		getData(user);
		search.value="";

	}
});