import { useRouter } from "next/router";
import { UrlObject } from "url";

export const useMoveToPage = () => {
  const router = useRouter();
  const moveToPage = (page: string | UrlObject) => () => {
    router.push(page);
  };  return {
    moveToPage,
  };
};
