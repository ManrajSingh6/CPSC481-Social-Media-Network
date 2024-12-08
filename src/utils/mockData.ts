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

export const MOCK_USERS: User[] = [
  {
    id: 1,
    username: 'jdoe',
    email: 'jdoe@mail.com',
    password: 'jdoe',
    fullName: 'John Doe',
    profilePicUrl: 'https://avatar.iran.liara.run/public/5',
    enrolledGroupIds: [3, 4],
    enrolledEventIds: [3]
  },
  {
    id: 2,
    username: 'asmith',
    email: 'asmith@mail.com',
    password: 'asmith',
    fullName: 'Alice Smith',
    profilePicUrl: 'https://avatar.iran.liara.run/public/6',
    enrolledGroupIds: [1],
    enrolledEventIds: [1, 2]
  },
  {
    id: 3,
    username: 'bjones',
    email: 'bjones@mail.com',
    password: 'bjones',
    fullName: 'Bob Jones',
    profilePicUrl: 'https://avatar.iran.liara.run/public/7',
    enrolledGroupIds: [3],
    enrolledEventIds: [2, 3]
  },
  {
    id: 4,
    username: 'clee',
    email: 'clee@mail.com',
    password: 'clee',
    fullName: 'Catherine Lee',
    profilePicUrl: 'https://avatar.iran.liara.run/public/8',
    enrolledGroupIds: [1, 2],
    enrolledEventIds: [1, 3]
  },
  {
    id: 4,
    username: 'dwang',
    email: 'dwang@mail.com',
    password: 'dwang',
    fullName: 'Daniel Wang',
    profilePicUrl: 'https://avatar.iran.liara.run/public/9',
    enrolledGroupIds: [2],
    enrolledEventIds: [2]
  },
  {
    id: 5,
    username: 'egarcia',
    email: 'egarcia@mail.com',
    password: 'egarcia',
    fullName: 'Emily Garcia',
    profilePicUrl: 'https://avatar.iran.liara.run/public/10',
    enrolledGroupIds: [1, 3],
    enrolledEventIds: [1, 2, 3]
  },
  {
    id: 6,
    username: 'fwhite',
    email: 'fwhite@mail.com',
    password: 'fwhite',
    fullName: 'Frank White',
    profilePicUrl: 'https://avatar.iran.liara.run/public/11',
    enrolledGroupIds: [1],
    enrolledEventIds: [1]
  },
  {
    id: 7,
    username: 'gmartin',
    email: 'gmartin@mail.com',
    password: 'gmartin',
    fullName: 'Grace Martin',
    profilePicUrl: 'https://avatar.iran.liara.run/public/12',
    enrolledGroupIds: [2, 3],
    enrolledEventIds: [2, 3]
  },
  {
    id: 8,
    username: 'hclark',
    email: 'hclark@mail.com',
    password: 'hclark',
    fullName: 'Harry Clark',
    profilePicUrl: 'https://avatar.iran.liara.run/public/13',
    enrolledGroupIds: [1, 3],
    enrolledEventIds: [1, 3]
  },
  {
    id: 9,
    username: 'imiller',
    email: 'imiller@mail.com',
    password: 'imiller',
    fullName: 'Isabella Miller',
    profilePicUrl: 'https://avatar.iran.liara.run/public/14',
    enrolledGroupIds: [3],
    enrolledEventIds: [2]
  },
  {
    id: 10,
    username: 'jkhan',
    email: 'jkhan@mail.com',
    password: 'jkhan',
    fullName: 'Jack Khan',
    profilePicUrl: 'https://avatar.iran.liara.run/public/15',
    enrolledGroupIds: [1, 2],
    enrolledEventIds: [1, 2]
  }
]

export const MOCK_USER: User = MOCK_USERS[0] // John Doe

// TODO: Ensure each post has varied users for the creator field, currently they are all the same
// TODO: Ensure each post comment has varied users for the creator field, currently they are all the same
export const MOCK_GROUPS: Group[] = [
  {
    id: 1,
    name: 'Baking',
    description:
      'A group for baking enthusiasts who love experimenting with recipes, sharing baking tips, and learning new techniques to create delicious treats. Whether you are a beginner or a pro, everyone is welcome!',
    creator: MOCK_USERS[1],
    posts: [
      {
        id: 1,
        title: 'Best Chocolate Chip Cookie Recipe',
        content:
          'Chocolate chip cookies are a timeless treat that everyone loves. This recipe is designed to give you the perfect balance of crispy edges and chewy centers, ensuring every bite is pure bliss. The secret lies in the combination of brown sugar for that caramel flavor and a pinch of sea salt to elevate the sweetness. We’ll also cover tips on how to chill the dough for a richer taste and how to pick the best chocolate chips for maximum gooeyness. ',
        createdAt: new Date('2024-11-20T12:00:00Z'),
        imageUrl:
          'https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/1:1/w_2560%2Cc_limit/chocolate-chip-cookie.jpg',
        creator: MOCK_USERS[4],
        likeCount: 12,
        comments: [
          {
            id: 1,
            content: 'This sounds amazing! Can’t wait to try it out.',
            creator: MOCK_USERS[8],
            createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
          },
          {
            id: 2,
            content:
              'I love chocolate chip cookies! Thanks for sharing your secret tips.',
            creator: MOCK_USER,
            createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000) // 7 hours ago
          },
          {
            id: 3,
            content:
              'Chilling the dough really makes a difference. Excited to see how this recipe turns out!',
            creator: MOCK_USERS[5],
            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
          }
        ]
      },
      {
        id: 2,
        title: 'Sourdough Starter Guide',
        content:
          'Creating your own sourdough starter is a rewarding process that connects you to the age-old tradition of breadmaking. This guide walks you through every step, from choosing the right flour to understanding the science behind natural fermentation. You’ll learn how to cultivate a starter with just flour and water, monitor its activity, and troubleshoot common issues like overly acidic smells or lack of bubbles. ',
        createdAt: new Date('2024-11-20T12:00:00Z'),
        imageUrl:
          'https://littlespoonfarm.com/wp-content/uploads/2020/01/Sourdough-Bread-Recipe-for-Beginners.jpg',
        creator: MOCK_USERS[3],
        likeCount: 16,
        comments: [
          {
            id: 1,
            content:
              'This guide looks so detailed! I’ve been wanting to start my sourdough journey.',
            creator: MOCK_USERS[9],
            createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
          },
          {
            id: 2,
            content:
              'I always struggled with getting my starter bubbly enough. Excited to try your tips!',
            creator: MOCK_USERS[7],
            createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
          }
        ]
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
    creator: MOCK_USERS[1],
    posts: [
      {
        id: 1,
        title: 'Top 10 Sports Cars of 2024',
        content:
          'Here’s a list of the top 10 sports cars you should check out this year. Let us know your favorites!',
        createdAt: new Date('2024-11-18T15:00:00Z'),
        imageUrl:
          'https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg',
        creator: MOCK_USER,
        likeCount: 45,
        comments: [
          {
            id: 1,
            content:
              'The Koenigsegg Jesko is an absolute beast! Definitely my favorite from the list.',
            creator: MOCK_USERS[5],
            createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
          },
          {
            id: 2,
            content:
              'Loving the diversity in this list! Any plans to cover electric sports cars next?',
            creator: MOCK_USERS[7],
            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
          }
        ]
      },
      {
        id: 2,
        title: 'How to Maintain Your Car’s Engine',
        content:
          'An essential guide to keeping your car engine running smoothly for years to come.',
        createdAt: new Date('2024-11-19T08:30:00Z'),
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtjxCC2FTSxDmWvupgb_6xZNk39-TAJwsHQ&s',
        creator: MOCK_USERS[2],
        likeCount: 20,
        comments: [
          {
            id: 1,
            content:
              'Thanks for this guide! Regular maintenance really makes a big difference.',
            creator: MOCK_USERS[3],
            createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
          },
          {
            id: 2,
            content:
              'Do you recommend synthetic oil over conventional oil for better engine performance?',
            creator: MOCK_USERS[8],
            createdAt: new Date(Date.now() - 9 * 60 * 60 * 1000) // 9 hours ago
          }
        ]
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
    creator: MOCK_USERS[3],
    posts: [
      {
        id: 1,
        title: 'The Ultimate Guide to Pour-Over Coffee',
        content:
          'Learn how to make a perfect pour-over coffee with this detailed step-by-step guide.',
        createdAt: new Date('2024-11-15T10:00:00Z'),
        imageUrl:
          'https://assets.epicurious.com/photos/5542398605ebb68a358be62c/master/pass/EP-04162015-coffee-pour-small-6x4.jpg',
        creator: MOCK_USERS[0],
        likeCount: 8,
        comments: [
          {
            id: 1,
            content:
              'This guide is fantastic! I’ve been struggling to get the right water-to-coffee ratio.',
            creator: MOCK_USERS[4],
            createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
          },
          {
            id: 2,
            content:
              'Do you have a recommendation for the best type of filter to use?',
            creator: MOCK_USERS[3],
            createdAt: new Date(Date.now() - 9 * 60 * 60 * 1000) // 9 hours ago
          }
        ]
      },
      {
        id: 2,
        title: 'Top 5 Coffee Beans for Espresso',
        content:
          'Discover the best coffee beans to create a rich and creamy espresso at home.',
        createdAt: new Date('2024-11-16T07:45:00Z'),
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg',
        creator: MOCK_USERS[1],
        likeCount: 16,
        comments: [
          {
            id: 1,
            content:
              'I’ve been looking for a good espresso bean recommendation. Can’t wait to try these!',
            creator: MOCK_USERS[1],
            createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
          },
          {
            id: 2,
            content:
              'Do you know which of these beans would work best with a moka pot?',
            creator: MOCK_USERS[0],
            createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000) // 10 hours ago
          }
        ]
      }
    ],
    createdAt: new Date('2024-11-08T11:30:00Z'),
    type: 'Group'
  },
  {
    id: 4,
    name: 'Photography',
    description:
      'A group for photography enthusiasts to share tips, showcase their work, and discuss gear. Whether you’re a beginner or a pro, join us to capture and celebrate the art of photography!',
    creator: MOCK_USERS[2],
    posts: [
      {
        id: 1,
        title: 'The Basics of Night Photography',
        content:
          'Master the art of night photography with these essential tips and techniques.',
        createdAt: new Date('2024-11-18T20:00:00Z'),
        imageUrl:
          'https://images.squarespace-cdn.com/content/v1/63ceaffd33529a45e572bf90/eea55765-ce6b-45a8-b980-b564275c3508/Mikko-Lagerstedt-Night-Of-Fog.jpg',
        creator: MOCK_USERS[5],
        likeCount: 12,
        comments: [
          {
            id: 1,
            content:
              'This guide is awesome! I’ve always struggled with capturing stars clearly.',
            creator: MOCK_USERS[4],
            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
          },
          {
            id: 2,
            content:
              'Any suggestions for affordable tripods for night photography?',
            creator: MOCK_USERS[6],
            createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
          }
        ]
      },
      {
        id: 2,
        title: 'Top 10 Lenses for Photography',
        content:
          'Explore the best lenses to take your landscape photography to the next level.',
        createdAt: new Date('2024-11-19T15:30:00Z'),
        imageUrl:
          'https://photographyproject.uk/wp-content/uploads/2022/04/28-1337-post/camera-lens.jpg',
        creator: MOCK_USERS[3],
        likeCount: 20,
        comments: [
          {
            id: 1,
            content:
              'Great recommendations! I’ve been thinking of upgrading my gear for landscapes.',
            creator: MOCK_USERS[1],
            createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
          },
          {
            id: 2,
            content:
              'Do you know if these lenses are compatible with mirrorless cameras?',
            creator: MOCK_USERS[0],
            createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000) // 7 hours ago
          }
        ]
      }
    ],
    createdAt: new Date('2024-11-10T14:00:00Z'),
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
    creator: MOCK_USERS[2],
    type: 'Event',
    likeCount: 12,
    imageUrl:
      'https://thebakersjunction.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-24-21.30.23-A-lively-scene-of-a-baking-workshop-in-a-bright-well-lit-kitchen.-The-instructor-is-demonstrating-a-baking-technique-to-a-group-of-enthusiastic-parti.webp',
    comments: [
      {
        id: 1,
        content:
          'I’m so excited to learn baking techniques from professionals!',
        creator: MOCK_USERS[5],
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
      },
      {
        id: 2,
        content: 'Can we bring our own utensils to the workshop?',
        creator: MOCK_USERS[7],
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
      }
    ],
    rsvpCount: 8
  },
  {
    id: 2,
    name: 'Photography Walk',
    description:
      "Join us for a photography walk through the city's most scenic spots. Capture the beauty around you!",
    location: 'Central Park',
    date: new Date('2024-12-05T15:00:00Z'),
    duration: EventDuration.Hour,
    creator: MOCK_USERS[8],
    type: 'Event',
    likeCount: 18,
    imageUrl:
      'https://i0.wp.com/nicolesy.com/wp-content/uploads/2010/07/WWPhotowalk-67-Edit.jpg?fit=2500%2C1673&ssl=1',
    comments: [
      {
        id: 1,
        content: 'Is there a meetup point for the walk?',
        creator: MOCK_USERS[1],
        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
      },
      {
        id: 2,
        content: 'This is a great opportunity to learn photography tips!',
        creator: MOCK_USERS[6],
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      }
    ],
    rsvpCount: 24
  },
  {
    id: 3,
    name: 'Fitness Bootcamp',
    description:
      'An intensive fitness bootcamp to push your limits and help you achieve your fitness goals.',
    location: 'Downtown Gym',
    date: new Date('2024-12-10T08:00:00Z'),
    duration: EventDuration.Day,
    creator: MOCK_USERS[4],
    type: 'Event',
    likeCount: 25,
    imageUrl:
      'https://cdn.webshopapp.com/shops/281654/files/377244341/the-advantages-of-boot-camp.jpg',
    comments: [
      {
        id: 1,
        content: 'Do we need to bring our own mats?',
        creator: MOCK_USERS[9],
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
      },
      {
        id: 2,
        content: 'I’ve heard this bootcamp is intense but rewarding!',
        creator: MOCK_USERS[0],
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
      }
    ],
    rsvpCount: 12
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
    friend_name: 'Aubrey Graham',
    friend_pictureURL: 'https://avatar.iran.liara.run/public/1',
    user_pictureURL: 'https://avatar.iran.liara.run/public/5',
    messages: [
      {
        senderID: 1,
        time: '4:23 PM',
        message: 'Thanks to your recipe!'
      },
      {
        senderID: 2,
        time: '4:21 PM',
        message: 'No problem! Glad you liked it. 😊'
      },
      {
        senderID: 1,
        time: '4:18 PM',
        message:
          'It turned out amazing! I didn’t know you could make such a great dish with just a few ingredients!'
      },
      {
        senderID: 2,
        time: '4:15 PM',
        message:
          'You just need the right spices! Trust me, it’s all in the seasoning. Let me know how it goes!'
      },
      {
        senderID: 1,
        time: '4:10 PM',
        message:
          'I’m thinking about making that pasta you mentioned. Got any tips?'
      },
      {
        senderID: 2,
        time: '4:09 PM',
        message:
          'Of course! Here’s the recipe I use. It’s super simple, but trust me, it’s delicious!'
      }
    ]
  },
  {
    friend_id: 2,
    friend_name: 'Sam Kim',
    friend_pictureURL: 'https://avatar.iran.liara.run/public/2',
    user_pictureURL: 'https://avatar.iran.liara.run/public/5',
    messages: [
      {
        senderID: 2,
        time: '1:09 PM',
        message: 'Come by to my study session later'
      },
      {
        senderID: 1,
        time: '1:08 PM',
        message: 'Sounds good, I’ll try to make it!'
      },
      {
        senderID: 2,
        time: '1:05 PM',
        message: 'I’ll be starting around 2 PM.'
      }
    ]
  },
  {
    friend_id: 3,
    friend_name: 'Luke Chiang',
    friend_pictureURL: 'https://avatar.iran.liara.run/public/3',
    user_pictureURL: 'https://avatar.iran.liara.run/public/5',
    messages: [
      {
        senderID: 3,
        time: '12:10 PM',
        message: 'Check out this song: ...'
      },
      {
        senderID: 1,
        time: '12:09 PM',
        message: 'I’ll listen to it after work!'
      },
      {
        senderID: 3,
        time: '12:07 PM',
        message: 'It’s so good, I think you’ll love it.'
      }
    ]
  }
]

export const MOCK_NEW_USERS: NewChatUser[] = [
  {
    id: 4,
    pictureURL: 'https://avatar.iran.liara.run/public/4',
    name: 'Jane Doe'
  },
  {
    id: 5,
    pictureURL: 'https://avatar.iran.liara.run/public/5',
    name: 'John Smith'
  },
  {
    id: 6,
    pictureURL: 'https://avatar.iran.liara.run/public/6',
    name: 'Emily Zhang'
  }
]
