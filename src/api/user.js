import request from '@/utils/request'

export function getTenantIdByUrl(data){
  return request({
    url: 'uoc/tenantManager/getTenantIdByUrl?url=' + data,
    method: 'get',
    data
  })
}
export function login(data) {
  return request({
    url: 'uoc/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: 'uoc/user/logout',
    method: 'post'
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}


