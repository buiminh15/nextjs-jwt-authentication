import Services from "@/config/axios";
import { API_PATHS, URL_PATHS } from "@/constants";
import { Token, User } from "@/types/user";

const authService = {
  login: (email: string, password: string): Promise<Token> =>
    Services.post(API_PATHS.LOGIN, { email, password }),
  getProfile: (): Promise<User> => Services.get(API_PATHS.PROFILE),
};

export { authService };
