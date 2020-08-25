
function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element
}

 function nestedTarget() {
 var nestedTarget = document.querySelector('#nested .target')
 return nestedTarget
}

function deepestChild() {
  var deepestChild = document.querySelector('#grand-node div div div div')
  return deepestChild
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]
      let children = firstList.children

for (let i = 0; i < children.length; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n
      }

children = secondList.children

      for (let i = 0; i < children.length; i++) {
        children[i].innerHTML = parseInt(children[i].innerHTML) + n
      }

}