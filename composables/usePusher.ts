import type { Push } from "notivue";

export function usePusher() {
  const auth = useAuthStore();
  // const push = usePush();

  const subscribePusher = (push: Push) => {
    

    
  };

  return { subscribePusher };
}
