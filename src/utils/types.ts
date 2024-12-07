export enum EventDuration {
  Hour = '1 hour',
  TwoHours = '2 hours',
  ThreeHours = '3 hours',
  Day = '1 day'
}

export interface User {
  readonly id: number
  readonly username: string
  readonly email: string
  readonly password: string
  readonly fullName: string
  readonly profilePicUrl: string
  readonly enrolledGroupIds: number[]
  readonly enrolledEventIds: number[]
}

export interface NewChatUser {
  id: number
  pictureURL: string
  name: string
}

export type GroupOrEvent = 'Group' | 'Event'

export interface Group {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly creator: User
  readonly posts: GroupPost[]
  readonly createdAt: Date
  readonly type: GroupOrEvent
}

export interface Comment {
  readonly id: number
  readonly content: string
  readonly creator: User
  readonly createdAt: Date
}

export interface GroupPost {
  readonly id: number
  readonly title: string
  readonly content: string
  readonly imageUrl?: string
  readonly createdAt: Date
  readonly creator: User
  readonly likeCount: number
  readonly comments: readonly Comment[]
}

export interface Event {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly location: string
  readonly date: Date
  readonly duration: EventDuration
  readonly creator: User
  readonly type: GroupOrEvent
  readonly likeCount: number
  readonly imageUrl?: string
  readonly comments: readonly Comment[]
  readonly rsvpCount: number
}

export interface DirectMessage {
  readonly id: number
  readonly pictureURL: string
  readonly name: string
  readonly message: string
  readonly time: string
}

export interface CustomNotification {
  readonly id: number
  readonly pictureURL: string
  readonly time: string
  readonly message1: string
  readonly message2: string
  readonly value1: string
  readonly value2: string
}

export interface ChatItem {
  senderID: number
  time: string
  message: string
}

export interface Chat {
  friend_id: number
  friend_name: string
  friend_pictureURL: string
  user_pictureURL: string
  messages: ChatItem[]
}
