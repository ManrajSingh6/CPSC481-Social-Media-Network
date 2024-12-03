import {
  EventDuration,
  Group,
  User,
  Event,
  DirectMessage,
  CustomNotification,
  Chat,
  NewChatUser
} from './types'

export const MOCK_USER: User = {
  username: 'jdoe',
  email: 'jdoe@mail.com',
  password: 'jdoe',
  fullName: 'John Doe',
  profilePicUrl: 'https://avatar.iran.liara.run/public/5',
  enrolledGroupIds: [2, 3],
  enrolledEventIds: [3]
}

export const MOCK_GROUPS: Group[] = [
  {
    id: 1,
    name: 'Baking',
    description:
      'A group for baking enthusiasts who love experimenting with recipes, sharing baking tips, and learning new techniques to create delicious treats. Whether you are a beginner or a pro, everyone is welcome!',
    creator: MOCK_USER,
    posts: [
      {
        id: 1,
        title: 'Best Chocolate Chip Cookie Recipe',
        content:
          'Here is a foolproof recipe for the best chocolate chip cookies!',
        createdAt: new Date('2024-11-20T12:00:00Z')
      },
      {
        id: 2,
        title: 'Sourdough Starter Guide',
        content: 'A step-by-step guide to creating your own sourdough starter.',
        createdAt: new Date('2024-11-20T12:00:00Z')
      }
    ],
    createdAt: new Date('2024-11-10T09:00:00Z'),
    type: 'Group'
  },
  {
    id: 2,
    name: 'Cars',
    description:
      'A group for car enthusiasts who love discussing everything about automobiles, from classic muscle cars to the latest electric vehicles. Share your passion, ask for advice, and explore the world of cars with fellow gearheads.',
    creator: MOCK_USER,
    posts: [
      {
        id: 1,
        title: 'Top 10 Sports Cars of 2024',
        content:
          'Here’s a list of the top 10 sports cars you should check out this year. Let us know your favorites!',
        createdAt: new Date('2024-11-18T15:00:00Z')
      },
      {
        id: 2,
        title: 'How to Maintain Your Car’s Engine',
        content:
          'An essential guide to keeping your car engine running smoothly for years to come.',
        createdAt: new Date('2024-11-19T08:30:00Z')
      }
    ],
    createdAt: new Date('2024-11-05T14:00:00Z'),
    type: 'Group'
  },
  {
    id: 3,
    name: 'Coffee',
    description:
      'A group for coffee lovers to explore brewing techniques, share favorite roasts, and discuss the art of making the perfect cup. Whether you’re into espresso, cold brew, or pour-over, join us for some caffeinated fun!',
    creator: MOCK_USER,
    posts: [
      {
        id: 1,
        title: 'The Ultimate Guide to Pour-Over Coffee',
        content:
          'Learn how to make a perfect pour-over coffee with this detailed step-by-step guide.',
        createdAt: new Date('2024-11-15T10:00:00Z')
      },
      {
        id: 2,
        title: 'Top 5 Coffee Beans for Espresso',
        content:
          'Discover the best coffee beans to create a rich and creamy espresso at home.',
        createdAt: new Date('2024-11-16T07:45:00Z')
      }
    ],
    createdAt: new Date('2024-11-08T11:30:00Z'),
    type: 'Group'
  }
]

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    name: 'Community Baking Workshop',
    description:
      'A fun-filled baking workshop where you can learn to bake delicious cakes and pastries.',
    location: 'Community Hall',
    date: new Date('2024-12-01T10:00:00Z'),
    duration: EventDuration.TwoHours,
    creator: MOCK_USER,
    type: 'Event'
  },
  {
    id: 2,
    name: 'Photography Walk',
    description:
      "Join us for a photography walk through the city's most scenic spots. Capture the beauty around you!",
    location: 'Central Park',
    date: new Date('2024-12-05T15:00:00Z'),
    duration: EventDuration.Hour,
    creator: MOCK_USER,
    type: 'Event'
  },
  {
    id: 3,
    name: 'Fitness Bootcamp',
    description:
      'An intensive fitness bootcamp to push your limits and help you achieve your fitness goals.',
    location: 'Downtown Gym',
    date: new Date('2024-12-10T08:00:00Z'),
    duration: EventDuration.Day,
    creator: MOCK_USER,
    type: 'Event'
  }
]

export const MOCK_MESSAGES: DirectMessage[] = [
  {
    id: 1,
    pictureURL: 'https://avatar.iran.liara.run/public/1',
    name: 'Aubrey Graham',
    message: 'Thanks to your recipe!',
    time: '4:23 PM'
  },
  {
    id: 2,
    pictureURL: 'https://avatar.iran.liara.run/public/2',
    name: 'Sam Kim',
    message: 'Come by to my study session later',
    time: '1:09 PM'
  },
  {
    id: 3,
    pictureURL: 'https://avatar.iran.liara.run/public/3',
    name: 'Luke Chiang',
    message: 'Check out this song: ...',
    time: '12:10 PM'
  }
]

export const MOCK_NOTIFICATIONS: CustomNotification[] = [
  {
    id: 1,
    pictureURL: 'https://avatar.iran.liara.run/public/1',
    time: '12:18 PM',
    message1: 'shared a post in',
    message2: 'group',
    value1: 'Aubrey Graham',
    value2: 'Cars'
  },
  {
    id: 2,
    pictureURL: 'https://avatar.iran.liara.run/public/2',
    time: '1d',
    message1: 'occurs today!',
    message2: '',
    value1: 'Study Session @ 3:15pm',
    value2: ''
  },
  {
    id: 3,
    pictureURL: 'https://avatar.iran.liara.run/public/3',
    time: '5d',
    message1: 'shared a post in',
    message2: 'group',
    value1: 'Luke Chiang',
    value2: 'baking'
  },
  {
    id: 4,
    pictureURL: 'https://avatar.iran.liara.run/public/3',
    time: '5d',
    message1: "RSVP'd to your",
    message2: 'event',
    value1: 'Luke Chiang',
    value2: 'Baking Class'
  },
  {
    id: 5,
    pictureURL: 'https://avatar.iran.liara.run/public/2',
    time: '3w',
    message1: 'shared a post in',
    message2: 'group',
    value1: 'Sam Kim',
    value2: 'Cars'
  }
]

export const MOCK_CHATS: Chat[] = [
  {
    friend_id: 1,
    friend_name: "Aubrey Graham",
    friend_pictureURL: "https://avatar.iran.liara.run/public/1",
    user_pictureURL: "https://avatar.iran.liara.run/public/5",
    messages: [
      {
        senderID: 1,
        time: "4:23 PM",
        message: "Thanks to your recipe!"
      },
      {
        senderID: 2,
        time: "4:21 PM",
        message: "No problem! Glad you liked it. 😊"
      },
      {
        senderID: 1,
        time: "4:18 PM",
        message: "It turned out amazing! I didn’t know you could make such a great dish with just a few ingredients!"
      },
      {
        senderID: 2,
        time: "4:15 PM",
        message: "You just need the right spices! Trust me, it’s all in the seasoning. Let me know how it goes!"
      },
      {
        senderID: 1,
        time: "4:10 PM",
        message: "I’m thinking about making that pasta you mentioned. Got any tips?"
      },
      {
        senderID: 2,
        time: "4:09 PM",
        message: "Of course! Here’s the recipe I use. It’s super simple, but trust me, it’s delicious!"
      }
    ]
  },
  {
    friend_id: 2,
    friend_name: "Sam Kim",
    friend_pictureURL: "https://avatar.iran.liara.run/public/2",
    user_pictureURL: "https://avatar.iran.liara.run/public/5",
    messages: [
      {
        senderID: 2,
        time: "1:09 PM",
        message: "Come by to my study session later"
      },
      {
        senderID: 1,
        time: "1:08 PM",
        message: "Sounds good, I’ll try to make it!"
      },
      {
        senderID: 2,
        time: "1:05 PM",
        message: "I’ll be starting around 2 PM."
      }
    ]
  },
  {
    friend_id: 3,
    friend_name: "Luke Chiang",
    friend_pictureURL: "https://avatar.iran.liara.run/public/3",
    user_pictureURL: "https://avatar.iran.liara.run/public/5",
    messages: [
      {
        senderID: 3,
        time: "12:10 PM",
        message: "Check out this song: ..."
      },
      {
        senderID: 1,
        time: "12:09 PM",
        message: "I’ll listen to it after work!"
      },
      {
        senderID: 3,
        time: "12:07 PM",
        message: "It’s so good, I think you’ll love it."
      }
    ]
  }
];


export const MOCK_NEW_USERS: NewChatUser[] = [
  {
    id: 4,
    pictureURL: "https://avatar.iran.liara.run/public/4",
    name: "Jane Doe"
  },
  {
    id: 5,
    pictureURL: "https://avatar.iran.liara.run/public/5",
    name: "John Smith"
  },
  {
    id: 6,
    pictureURL: "https://avatar.iran.liara.run/public/6",
    name: "Emily Zhang"
  }
];