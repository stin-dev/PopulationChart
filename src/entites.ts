export interface Prefecture {
  prefCode: number,
  prefName: string,
}

export interface Population {
  year: number,
  value: number,
  rate?: number,
}

export interface Populations {
  boundaryYear: number,
  data: {
    label: string,
    data: Population[],
  }[],
}

