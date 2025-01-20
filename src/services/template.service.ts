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

  public async verifyUser(credentials: { email: string; password: string }) {
    const url = this.buildUrl("/login");
    return this.httpWrapper.request(MapRequest.post, url, credentials);
  }
}

export default TemplateService;
