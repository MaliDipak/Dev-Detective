const userService = require("../services/userServices");

function root(req, res) {
  // res.send("root page");
  res.render("home");
}

function getUser(req, res) {
  res.send("Hello user this is user route");
}

async function getUserByUsername(req, res) {
  try {
    const username = req.params.username;
    const user = await userService.getUserFromAPI(username);
    const userFollowers = await userService.getUsersFollowers(username);
    const userFollowing = await userService.getUsersFollowing(username);

    if (!user) {
      console.log("fetching user data error");
      throw new Error("error");
    }

    let allConnections = {};

    userFollowers.forEach((element) => {
      if (!allConnections.hasOwnProperty(element.username)) {
        allConnections[element.username] = element;
      }
    });

    userFollowing.forEach((element) => {
      if (!allConnections.hasOwnProperty(element.username)) {
        allConnections[element.username] = element;
      }
    });

    const userData = {
      name: user.name,
      bio: user.bio,
      location: user.location,
      repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      profile_pic: user.avatar_url,
      allConnections: allConnections,
    };

    // res.send(userData);
    res.render("user", userData);
    //
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500);
  }
}

module.exports = {
  getUser,
  root,
  getUserByUsername,
};
