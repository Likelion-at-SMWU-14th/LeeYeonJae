import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/users";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myPage"] });
      console.log("개인정보 수정 성공");
    },
  });
};
