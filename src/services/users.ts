import api, {endpoints} from './index'

export async function getUsers(){
  const { get } = await api
  return get(endpoints.users)
}