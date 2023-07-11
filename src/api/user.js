import request from '@/utils/request'

export function getTenantIdByUrl(data) {
  return request({
    url: `uoc/tenantManager/getTenantIdByUrl?url=${data}`,
    method: 'get',
    data,
  })
}
export function login(data) {
  return request({
    url: 'uoc/user/login',
    method: 'post',
    data,
  })
}

export function logout(data) {
  return request({
    url: 'uoc/user/logout',
    method: 'post',
    data,
  })
}

export function getUserInfo(data) {
  return request({
    url: '/uoc/config/getBaseConfig',
    method: 'post',
    data,
  })
}
