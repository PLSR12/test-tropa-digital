// hooks/useLoginMutation.ts
import { useMutation } from "@tanstack/react-query";
import { LoginService } from "../../services/login";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: LoginService.login,
  });
};
