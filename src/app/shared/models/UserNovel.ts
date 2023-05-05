export interface UserNovel {
  finished: any
  id: string
  started: any
  vote: number | null
  voted: number | null
  added: number
  lastmod: number
  notes: string | null
  vn: VN
}

export interface VN {
  image: Image
  length: number
  description: string
  released: string
  alttitle: string | null
  devstatus: number
  length_votes: number
  votecount: number
  length_minutes: number | null
  titles: Title[]
  olang: string
  platforms: string[]
  aliases: string[]
  tags: Tag[]
  languages: string[]
  title: string
  screenshots: Screenshot[]
  rating: number
  popularity: number
}

export interface Image {
  dims: number[]
  votecount: number
  url: string
  id: string
  sexual: number
  violence: number
}

export interface Title {
  lang: string
  title: string
  main: boolean
  latin?: string | null
  official: boolean
}

export interface Tag {
  spoiler: number
  id: string
  lie: boolean
  rating: number
}

export interface Screenshot {
  thumbnail: string
  thumbnail_dims: number[]
}
