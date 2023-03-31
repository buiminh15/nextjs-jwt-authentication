import Services from "@/config/axios";
import { URL_PATHS } from "@/constants";
import { Token } from "@/types/user";

const authService = {
  login: (email: string, password: string): Promise<Token> =>
    Services.post(URL_PATHS.LOGIN, { email, password }),
  getProfile: () => Services.get(URL_PATHS.PROFILE),
};

export { authService };
