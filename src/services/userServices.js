async function getUserFromAPI(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      console.log("api error");
      throw new Error("Failed to fetch user from API");
    }
    const userData = await response.json();

    return userData;
  } catch (error) {
    console.error("Error fetching user from API:", error);
    return null;
  }
}

async function getUsersFollowers(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/followers`
    );
    if (!response.ok) {
      console.log("api error");
      throw new Error("Failed to fetch user from API");
    }
    const connections = await response.json();

    let data = [];

    connections.forEach((element) => {
      data.push({
        username: element.login,
        profile_pic: element.avatar_url,
      });
    });

    return data;
    //
  } catch (error) {
    console.error("Error fetching followers from API:", error);
    return null;
  }
}

async function getUsersFollowing(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/following`
    );
    if (!response.ok) {
      console.log("api error");
      throw new Error("Failed to fetch user from API");
    }
    const connections = await response.json();

    let data = [];

    connections.forEach((element) => {
      data.push({
        username: element.login,
        profile_pic: element.avatar_url,
      });
    });

    return data;
    //
  } catch (error) {
    console.error("Error fetching following from API:", error);
    return null;
  }
}

module.exports = {
  getUserFromAPI,
  getUsersFollowers,
  getUsersFollowing,
};
