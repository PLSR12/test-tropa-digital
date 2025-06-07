import httpService from "../api";

export const LoginService = {
  login: async (body: {
    email: string;
    password: string;
  }): Promise<{
    token: string;
    user: {
      name: string;
      email: string;
    };
  }> => {
    const { data } = await httpService.post("/login", body);
    return data;
  },
};
