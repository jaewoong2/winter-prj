import { useState, useCallback, Dispatch, SetStateAction } from "react";

function hooks<T>(
  initalValue: T
): readonly [
  T,
  Dispatch<SetStateAction<T>>,
  (e?: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [value, setValue] = useState<typeof initalValue>(initalValue);
  const changer = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, changer] as const;
}

export default hooks;
