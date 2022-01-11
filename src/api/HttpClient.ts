import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {
  apiRoot: string;

  constructor(apiRoot: string) {
    this.apiRoot = apiRoot;
  }

  get<T = any>(route: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.get<T, AxiosResponse<T>>(this.apiRoute(route), config);
    return promise;
  }

  delete<T = any>(route: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.delete<T, AxiosResponse<T>>(this.apiRoute(route), config);
    return promise;
  }

  head<T = any>(route: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.head<T, AxiosResponse<T>>(this.apiRoute(route), config);
    return promise;
  }

  options<T = any>(route: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.options<T, AxiosResponse<T>>(this.apiRoute(route), config);
    return promise;
  }

  post<T = any>(route: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.post<T, AxiosResponse<T>>(this.apiRoute(route), data, config);
    return promise;
  }

  put<T = any>(route: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.put<T, AxiosResponse<T>>(this.apiRoute(route), data, config);
    return promise;
  }

  patch<T = any>(route: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const promise = axios.patch<T, AxiosResponse<T>>(this.apiRoute(route), data, config);
    return promise;
  }

  setCommonHeader(key: string, value: string) {
    axios.defaults.headers.common[key] = value;
  }

  deleteCommonHeader(key: string) {
    delete axios.defaults.headers.common[key];
  }

  private apiRoute(route: string): string {
    return `${this.apiRoot}${route}`;
  }
}
