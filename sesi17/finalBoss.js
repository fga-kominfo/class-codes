function findMinimumChannels(channels) {
  // Step 1: Get a list of all unique users
  const allUsers = [];
  channels.forEach(channel => {
    channel.members.forEach(member => {
      if (!allUsers.includes(member)) {
        allUsers.push(member);
      }
    });
  });

  const totalUsers = allUsers.length;

  // Step 2: Sort channels by the number of members in descending order
  const sortedChannels = channels.sort(
    (a, b) => b.members.length - a.members.length,
  );

  // Step 3: Select channels until all users are covered
  const selectedChannels = [];
  const coveredUsers = [];

  for (let i = 0; i < sortedChannels.length; i++) {
    const currentChannel = sortedChannels[i];
    let newUsersAdded = false;

    // Check if adding this channel will help cover more users
    currentChannel.members.forEach(member => {
      if (!coveredUsers.includes(member)) {
        coveredUsers.push(member);
        newUsersAdded = true;
      }
    });

    if (newUsersAdded) {
      selectedChannels.push(currentChannel.channelName);
    }

    // If we've covered all users, we can stop early
    if (coveredUsers.length === totalUsers) {
      break;
    }
  }

  return selectedChannels;
}

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

const minimumChannels = findMinimumChannels(channels2);

function checkUsersCovered(channels, selectedChannels) {
  const coveredUsers = [];
  selectedChannels.forEach(channelName => {
    const channel = channels.find(
      channel => channel.channelName === channelName,
    );
    channel.members.forEach(member => {
      if (!coveredUsers.includes(member)) {
        coveredUsers.push(member);
      }
    });
  });

  const allUsers = [];
  channels.forEach(e => {
    e.members.forEach(member => {
      if (!allUsers.includes(member)) {
        allUsers.push(member);
      }
    });
  });
  return {
    coveredUsers: coveredUsers.sort(),
    allUsers: allUsers.sort(),
  };
}

console.log(checkUsersCovered(channels2, minimumChannels));
// ["general", "random", "music", "coding", "food"]
