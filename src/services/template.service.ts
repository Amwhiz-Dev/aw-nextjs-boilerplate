import { MapRequest } from "../enum/request.enum";
import URLBuilder from "../helpers/url.builder";
import { PathParams, QueryParams } from "../interface/url.builder";
import ApiService from "./api.service";

class TemplateService {
  private httpWrapper: ApiService;
  constructor() {
    this.httpWrapper = new ApiService();
  }

  private buildUrl(
    path: string,
    pathParams?: PathParams,
    queryParams?: QueryParams
  ): string {
    const urlBuilder = new URLBuilder(path, pathParams, queryParams);
    return urlBuilder.buildURL();
  }
  
  //without pathParam and queryParam
  public async verifyUser(credentials: { email: string; password: string }) {
    const url = this.buildUrl("/login");
    return this.httpWrapper.request(MapRequest.post, url, credentials);
  }

  //without queryParam
  public async createUser(credentials: { email: string; password: string }) {
    const url = this.buildUrl("/login/:email", { email: credentials.email });
    return this.httpWrapper.request(MapRequest.post, url, credentials);
  }

  //without pathParam
  public async EditUser(credentials: { email: string; password: string }) {
    const url = this.buildUrl("/login", undefined, {
      email: credentials.email,
    });
    return this.httpWrapper.request(MapRequest.post, url, credentials);
  }

  //usage of all url builder
  public async getUserData(email: string, _id: string) {
    const url = this.buildUrl("/login/:email", { email }, { _id });
    return this.httpWrapper.request(MapRequest.get, url);
  }
}

export default TemplateService;
