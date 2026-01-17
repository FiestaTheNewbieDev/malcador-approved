import * as Types from '@/types/requester';
import { AxiosRequestConfig } from 'axios';
import client from './client';
import RequesterError from './error';

const requester: Types.Requester = () => {
  const get: Types.Request = async <T>(
    url: string,
    options?: AxiosRequestConfig,
  ) => (await client.get<T>(url, options)).data;

  const post: Types.RequestWithData = async <T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => (await client.post<T>(url, data, options)).data;

  const put: Types.RequestWithData = async <T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => (await client.put<T>(url, data, options)).data;

  const del: Types.Request = async <T>(
    url: string,
    options?: AxiosRequestConfig,
  ) => (await client.delete<T>(url, options)).data;

  const patch: Types.RequestWithData = async <T>(
    url: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => (await client.patch<T>(url, data, options)).data;

  return { get, post, put, delete: del, patch };
};

export { client, RequesterError };
export default requester;
