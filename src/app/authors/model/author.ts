
export class Bio {
  constructor(
    public id: number,
    public biodata: string
  ) {}
}

export class Author {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public bio?: Bio,
    public books?: { title: string }[]
  ) {}
}
