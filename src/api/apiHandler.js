import { BASE_URL } from '../utils/constants';
import axios from './interceptor';

const apiHandler = {
  getUser(userId) {
    return axios.get(`${BASE_URL}/users/${userId}`);
  },
  getChart(chartId) {
    return axios.get(`${BASE_URL}/chart/${chartId}`);
  },
  createUser(user) {
    return axios.post(`${BASE_URL}/users`, user);
  },
  updateChart(chartId, chart) {
    return axios.put(`${BASE_URL}/chart/${chartId}`, chart);
  },
  deleteChart(chartId) {
    return axios.delete(`${BASE_URL}/chart/${chartId}`);
  },
};

export default apiHandler;
