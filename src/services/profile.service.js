import { axiosInstance } from "./api.service";

export const updateProfile = async (id, params) => {
    const response = await axiosInstance.put(`/profile/${id}`, params);
    return response;
}
