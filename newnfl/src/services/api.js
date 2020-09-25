import axios from 'axios';

export const api_espn = axios.create({
  baseURL: 'https://site.api.espn.com/apis'
})

export const api_sports = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391'
})