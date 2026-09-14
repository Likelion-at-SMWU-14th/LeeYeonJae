import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/users";

export const useMyPage = (userId) => {
  return useQuery({
    queryKey: ["myPage", userId],
    queryFn: () => fetchUser(userId),
    staleTime: 1000 * 30,
    gcTime: 1000 * 60 * 10,
    retry: 3,
  });
};
