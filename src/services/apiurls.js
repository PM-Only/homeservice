import axios from "axios"
const server="http://apps.codebetter.in:8082/quickserve"

export const URLS ={
    ADMIN_LOGIN: `${server}/auth/login`,
    USER_LIST:`${server}/user/list`,
    SINGLE_USER:`${server}/user/list/id/`,
    CATE_SAVE:`${server}/item/save`,
    CATE_LIST:`${server}/item/listAll`,
    SERVICE_LIST:`${server}/serviceType/list`,
    SERVICE_DELETE:`${server}/serviceType/delete`,
    SERVICE_SAVE:`${server}/serviceType/save`,
    BOOKING_USER:`${server}/booking/admin/bookingReq/list`,
    BOOKING_CANCEL:`${server}/booking/user/booking/cancel`,
    IMAGE_UPLOAD:`${server}/profile/uploadpic`
}


class WebService{
    getApiCall(url){
        return axios.get(url)
    }
    postApiCall(url,data){
        return axios.post(url,data)
    }
    deleteApiCall(url,id){
        return axios.delete(url+'/'+id)
    }
    putApiCall(url,id){
        return axios.put(url+'/'+id)
    }
}

export default new WebService()