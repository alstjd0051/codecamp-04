import { ChangeEvent } from "react";

export interface IMyVariables {
  number?: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
export interface IBoardWriteUIPProps {
  aaa: (event: ChangeEvent<HTMLInputElement>) => void;
  bbb: (event: ChangeEvent<HTMLInputElement>) => void;
  ccc: (event: ChangeEvent<HTMLInputElement>) => void;
  zzz: () => void;
  qqq: boolean;
  ggg: boolean;
  xxx: () => void;
  data: any;
}

export interface IMyButtonProps {
  qqq: boolean;
}
