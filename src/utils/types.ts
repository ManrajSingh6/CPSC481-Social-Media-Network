export enum EventDuration {
  Hour = '1 hour',
  TwoHours = '2 hours',
  ThreeHours = '3 hours',
  Day = '1 day'
}

export interface User {
  readonly username: string
  readonly email: string
  readonly password: string
  readonly fullName: string
  readonly profilePicUrl: string
}

export interface Group {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly creator: User
  readonly posts: GroupPost[]
  readonly createdAt: Date
}

// TODO: add more fields to each post like likes, comments etc.
export interface GroupPost {
  readonly id: number
  readonly title: string
  readonly content: string
  readonly imageUrl?: string
  readonly createdAt: Date
}

export interface Event {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly location: string
  readonly date: Date
  readonly duration: EventDuration
  readonly creator: User
}
