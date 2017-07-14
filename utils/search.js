function tapSearchInput () {
  wx.navigateTo({ url: '../searchinput/searchinput' });
}

function tapSearchIndex (event) {
  const id = event.currentTarget.dataset.id || 0
  const url = '../search/search?id=' + id
  wx.navigateTo({ url })
}

module.exports = {
  tapSearchInput,
  tapSearchIndex
}
