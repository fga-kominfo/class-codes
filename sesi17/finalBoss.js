/*
    You are managing a Discord server with multiple channels. 
    Each channel has a unique list of members, though some members might be part of more than one channel. 
    Your task is to determine the minimum set of channels required to send a message so that every user in the server receives it.
*/

function findMinimumChannels(channels) {}

// Example Usage
const channels = [
  {
    channelName: 'general',
    members: ['Alice', 'Bob', 'Charlie'],
  },
  {channelName: 'random', members: ['Alice', 'David']},
  {channelName: 'gaming', members: ['Charlie', 'Eve']},
  {channelName: 'music', members: ['Bob', 'Eve', 'David']},
];

console.log(findMinimumChannels(channels));
// ["general", "music"] or ["gaming", "random", "general"]

const channels2 = [
  {
    channelName: 'general',
    members: ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
  },
  {
    channelName: 'random',
    members: ['Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'],
  },
  {
    channelName: 'gaming',
    members: ['Alice', 'Charlie', 'Eve', 'Mallory', 'Nina'],
  },
  {
    channelName: 'music',
    members: [
      'Oscar',
      'Peggy',
      'Quincy',
      'Rupert',
      'Sybil',
    ],
  },
  {
    channelName: 'coding',
    members: ['Alice', 'Trudy', 'Uma', 'Victor', 'Wendy'],
  },
  {
    channelName: 'movies',
    members: ['Xavier', 'Yvonne', 'Zara', 'Bob', 'Charlie'],
  },
  {
    channelName: 'books',
    members: ['David', 'Frank', 'Grace', 'Heidi', 'Ivan'],
  },
  {
    channelName: 'sports',
    members: ['Judy', 'Mallory', 'Nina', 'Oscar', 'Peggy'],
  },
  {
    channelName: 'travel',
    members: ['Quincy', 'Rupert', 'Sybil', 'Trudy', 'Uma'],
  },
  {
    channelName: 'food',
    members: [
      'Victor',
      'Wendy',
      'Xavier',
      'Yvonne',
      'Zara',
    ],
  },
];

console.log(findMinimumChannels(channels2));
// ["general", "random", "music", "coding", "food"]
