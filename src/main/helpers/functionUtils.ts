import { IKeyResult } from 'main/store/protocol';

export const verifyEmptyDatas = (datas: { goal: string; kr: IKeyResult[] }) =>
  datas.kr.map((d) => d.name === '').some((verify) => verify === true);
