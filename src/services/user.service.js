export const login = async (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    return data;
}

export const logout = async () => {
    localStorage.removeItem("user");
    return true;
}