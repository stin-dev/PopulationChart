import { ResasApiError } from "./ResasApiError";
import { Prefecture, Populations } from "./entites";

export class ResasApiService {
  private endpoint = "https://opendata.resas-portal.go.jp";

  constructor(private apiKey: string) { }

  get = async (apiPath: string, params?: URLSearchParams): Promise<any> => {
    const url = params ? `${this.endpoint}/${apiPath}?${params}` : `${this.endpoint}/${apiPath}`;

    const response = await fetch(url, { headers: { "X-API-KEY": this.apiKey } });

    if (response.status >= 500 && response.status < 600) {
      throw new ResasApiError(response.status, "RESAS Server Error");
    }

    if (response.status === 429) {
      throw new ResasApiError(response.status, "Too Many Requests");
    }

    const resObj = await response.json();

    if (resObj === "400") {
      throw new ResasApiError(response.status, "Bad Request");
    }

    if (resObj.statusCode === "403") {
      throw new ResasApiError(response.status, "Forbidden");
    }

    if (resObj === "404" || resObj.statusCode === "404") {
      throw new ResasApiError(response.status, "Not Found");
    }

    return resObj;
  }

  prefectures = async (): Promise<Prefecture[]> => {
    const response = await this.get("api/v1/prefectures");
    return response.result;
  }

  populationCompositionPerYear = async (
    prefCode: number,
    cityCode: string = "-",
    addArea?: { prefCode: number, cityCode?: string }[]): Promise<Populations> => {
    const params = new URLSearchParams();
    params.append("prefCode", String(prefCode));
    params.append("cityCode", cityCode);

    if (addArea) {
      params.append("addArea", addArea.map(area => {
        if (area.cityCode) {
          return `${area.prefCode}_${area.cityCode}`;
        } else {
          return `${area.prefCode}_`;
        }
      }).join(","));
    }

    const response = await this.get("api/v1/population/composition/perYear", params);
    return response.result;
  }
}