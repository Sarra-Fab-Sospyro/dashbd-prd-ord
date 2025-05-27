import { InjectionToken } from "@angular/core";

export interface IhttpConfig {
  apiUrl: string
}

export const APP_CONFIG_TOKEN = new InjectionToken<IhttpConfig>("APP_CONFIG");