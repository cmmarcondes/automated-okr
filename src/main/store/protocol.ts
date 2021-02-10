export type IKeyResult = {
  active: boolean;
  name: string;
  howitscalculated: string;
  information: string;
  att: string;
  target: string;
  currentvalue: string;
  progress: string;
  [key: string]: string | boolean;
};

export interface IOkr {
  objective: {
    goal: string;
    kr: IKeyResult[];
  };
}
