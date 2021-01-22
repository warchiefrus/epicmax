import request from './_base/request'

export default class Repos {
  constructor() {
    this.url = process.env.VUE_APP_API_BASE_URL
  }
  async getRepos(page = 0, perPage = 10, sort = '', order = 'desc') {
    try {
      const response = await request({
        url: `${this.url}/search/repositories?q=language:js&page=${page}&per_page=${perPage}&sort=${sort}&order=${order}`,
        method: 'GET'
      })
      return response.data
    } catch (error) {
      return null
    }
  }

  async getRepo(url = '') {
    try {
      const response = await request({
        url,
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error('Request faild' + error)
    }
  }
}
