import { toastMessage } from "@codeBase/src/common/toastMessage";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

class ApiService {
  private apiClient;
  private baseURL;

  constructor() {
    this.baseURL = process.env.BASE_API_URL;
    this.apiClient = axios.create({ baseURL: this.baseURL });

    // Interceptor to add headers and handle offline state
    this.apiClient.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<any> => {
        if (config.headers && !config.headers["Content-Type"]) {
          config.headers["Content-Type"] = "application/json";
        }
        if (!navigator.onLine) {
          console.warn(toastMessage.offline);
          return Promise.reject({ data: toastMessage.offline });
        }
        return config;
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
      }
    );
  }

  // Generic method to handle API errors
  private handleError(error: AxiosError): void {
    throw error.response?.data || error;
  }

  // Generic method to extract and return data from a successful response
  private handleResponse(response: AxiosResponse): any {
    return response.data;
  }

  // Get request method
  public async get(url: string): Promise<any> {
    try {
      const response: AxiosResponse = await this.apiClient.get(url);
      return this.handleResponse(response);
    } catch (error: any) {
      this.handleError(error);
    }
  }

  // Post request method
  public async post(url: string, data: any): Promise<any> {
    try {
      const response: AxiosResponse = await this.apiClient.post(url, data);
      return this.handleResponse(response);
    } catch (error: any) {
      this.handleError(error);
    }
  }

  // Patch request method
  public async patch(url: string, data: any): Promise<any> {
    try {
      const response: AxiosResponse = await this.apiClient.patch(url, data);
      return this.handleResponse(response);
    } catch (error: any) {
      this.handleError(error);
    }
  }

  // Delete request method with data
  public async delete(url: string, data: any): Promise<any> {
    try {
      const response: AxiosResponse = await this.apiClient.delete(url, {
        data,
      });
      return this.handleResponse(response);
    } catch (error: any) {
      this.handleError(error);
    }
  }

  // Delete request method without data
  public async deleteWithoutData(url: string): Promise<any> {
    try {
      const response: AxiosResponse = await this.apiClient.delete(url);
      return this.handleResponse(response);
    } catch (error: any) {
      this.handleError(error);
    }
  }
}

export default ApiService;
