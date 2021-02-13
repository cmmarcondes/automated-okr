export type IKeyResult = {
  active: boolean;
  name: string;
  howitscalculated: string;
  information: string;
  att: string;
  target: number;
  currentvalue: string;
  progress: string;
  [key: string]: string | boolean | number;
};

export interface IOkr {
  objective: {
    goal: string;
    kr: IKeyResult[];
  };
}
