// Work In Progress
// The hope is we can have a lists of the gists we want here and automatically add them

// list of gist javascript links ordered from most to least recent
var gist_links =
  ["https://gist.github.com/sfperchanok/a53dc7138b0c5cc903587b4d95b2adb5.js",
  "https://gist.github.com/sfperchanok/6c7e33b5a5ff2362c1c977d9ce1ca2e0.js"];
/*
function loadScript(url) {
  // Adding the script tag to the head as suggested before
  alert("called");
  var project = document.head;
  alert("called2");
  var script = document.createElement('script');
  alert("called3");
  script.src = url;
  alert(project);
  project.appendChild(script);
}

for (link in gist_links) {
  loadScript(link);
}
*/

function include(file) {
  var script  = document.createElement('script');
  var div = document.createElement('div');
  div.className = "recent-projects";
  script.src  = file;
  div.appendChild(script);
  const jumbotron = document.getElementsByClassName("jumbotron")[0];
  alert(jumbotron.children.length);
  jumbotron.appendChild(div);
  alert(jumbotron.children.length);
}

gist_links.forEach(function(item, index) {
  include(item);
})
