export type IKeyResult = {
  name: string;
  howitscalculated: string;
  information: string;
  att: string;
  target: string;
  currentvalue: string;
  progress: string;
  [key: string]: string;
};

export interface IOkr {
  objective: {
    goal: string;
    kr: IKeyResult[];
  };
}
