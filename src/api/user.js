import request from '@/utils/request'

export function getTenantIdByUrl(data) {
  return request({
    url: `mtoc/tenantManager/getTenantIdByUrl?url=${data}`,
    method: 'get',
    data,
  })
}
export function login(data) {
  return request({
    url: 'mtoc/user/login',
    method: 'post',
    data,
  })
}

export function logout(data) {
  return request({
    url: 'mtoc/user/logout',
    method: 'post',
    data,
  })
}

export function getUserInfo(data) {
  return request({
    url: '/mtoc/config/getBaseConfig',
    method: 'post',
    data,
  })
}
