import { axiosInstance } from "./api.service";

export const predictMeta = async (params) => {
    return (await axiosInstance.post("/meta/predict", params));
}
