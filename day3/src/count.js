function Count (count) {
  var div = document.createElement('div')
  count = count + 3000;
  div.innerHTML = count
  document.body.appendChild(div)
}

export default Count;