export type Project = {
    id: number,
    title: string,
    localisation: string,
    description: string,
    architect : string,
    cost: string,
    status: string,
    year: number | null,
    type: string[]
    images: string[]
  };