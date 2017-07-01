function tapTourlineDetail(event) {
  const id = event.currentTarget.dataset.id || null
  wx.navigateTo({url: '../tourlinedetail/tourlinedetail?id=' + id})
}

module.exports = {
  tapTourlineDetail: tapTourlineDetail
}
