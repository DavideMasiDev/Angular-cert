export interface JobDetail {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
  location: string,
  industries: Array<string>,
  types: Array<string>,
  description: string,
  publishDate: string,
}
