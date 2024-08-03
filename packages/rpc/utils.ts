export const API_BASE_URL = "http://localhost:5050/api";
// http://localhost:5050/api/workspace/1/projects/1/stories/23

import axios from "axios";

export function request(data: any, name: string): any {
  return axios.post(API_BASE_URL.concat(name), data);
}
