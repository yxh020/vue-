//处理请求数据和http请求方式
import service from "./service"

export function requestPost(url,data) { //post
    return service.post(url,data)
}