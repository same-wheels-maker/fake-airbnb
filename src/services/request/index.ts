import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

class AppRequest {
  private instance

  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.response.use(
      (res) => res?.data,
      (err) => console.error(err),
    )
  }

  request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  get(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.request({ ...config, method: 'get' })
  }

  post(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.request({ ...config, method: 'post' })
  }
}

export default new AppRequest('http://codercba.com:1888/airbnb/api', 10000)
