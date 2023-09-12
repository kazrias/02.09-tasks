/*
Write Pagination object that will get an array and pageSize, then will return the following.
-prevPage
-nextPage
-firstPage
-lastPage
-goToPage
-getPageItems
*/

const Pagination = {
  _pages: [],
  _currentPage: 0,
  init(arr = [], size = 0) {
    let arrayToPush = []
    for (let i = 0; i < arr.length; i++) {
      arrayToPush.push(arr[i]);
      if (arrayToPush.length === size) {
        this._pages.push(arrayToPush)
        arrayToPush = []
      }
    }
    if (arrayToPush.length !== 0)
      this._pages.push(arrayToPush)
  },
  firstPage() {
    this._currentPage = 0;
  },
  lastPage() {
    this._currentPage = this._pages.length - 1
  },
  prevPage() {
    if (this._currentPage !== 0) {
      this._currentPage--;
    }
    else
      this._currentPage = 0
    return this
  },
  nextPage() {
    if (this._currentPage + 1 !== this._pages.length) {
      this._currentPage++;
    }
    else
      this._currentPage = this._pages[this._pages.length - 1]
    return this
  },
  goToPage(page) {
    if (page <= 0)
      this._currentPage = 0
    else if (page > this._pages.length)
      this._currentPage = this._pages.length - 1
    else
      this._currentPage = page - 1;
    return this
  },
  getPageItems() {
    return this._pages[this._currentPage]
  },
  getAllPages() {
    return this._pages
  }
}
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

