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
    // const user = await userService.getUserFromAPI(username);
    // const userFollowers = await userService.getUsersFollowers(username);
    // const userFollowing = await userService.getUsersFollowing(username);

    // if (!user || !userFollowers || !userFollowing) {
    //   console.log("fetching user data error");
    // }

    // let allConnections = {};

    // userFollowers.forEach((element) => {
    //   if (!allConnections.hasOwnProperty(element.username)) {
    //     allConnections[element.username] = element;
    //   }
    // });

    // userFollowing.forEach((element) => {
    //   if (!allConnections.hasOwnProperty(element.username)) {
    //     allConnections[element.username] = element;
    //   }
    // });

    // const userData = {
    //   name: user.name,
    //   bio: user.bio,
    //   location: user.location,
    //   repos: user.public_repos,
    //   followers: user.followers,
    //   following: user.following,
    //   profile_pic: user.avatar_url,
    //   allConnections: allConnections,
    // };

    const data = {
      ajayg999: {
        username: "ajayg999",
        profile_pic: "https://avatars.githubusercontent.com/u/65119936?v=4",
      },
      Stp155906: {
        username: "Stp155906",
        profile_pic: "https://avatars.githubusercontent.com/u/71754706?v=4",
      },
      "nikhildevre-timmons": {
        username: "nikhildevre-timmons",
        profile_pic: "https://avatars.githubusercontent.com/u/77978371?v=4",
      },
      aeiou2021: {
        username: "aeiou2021",
        profile_pic: "https://avatars.githubusercontent.com/u/87865473?v=4",
      },
      Mangesh8530: {
        username: "Mangesh8530",
        profile_pic: "https://avatars.githubusercontent.com/u/90675406?v=4",
      },
      vishalpatil47: {
        username: "vishalpatil47",
        profile_pic: "https://avatars.githubusercontent.com/u/94235761?v=4",
      },
      "Nayan-2303": {
        username: "Nayan-2303",
        profile_pic: "https://avatars.githubusercontent.com/u/95711658?v=4",
      },
      MaliDipak: {
        username: "MaliDipak",
        profile_pic: "https://avatars.githubusercontent.com/u/96681905?v=4",
      },
      lalitt08: {
        username: "lalitt08",
        profile_pic: "https://avatars.githubusercontent.com/u/96982204?v=4",
      },
      Vedant2022: {
        username: "Vedant2022",
        profile_pic: "https://avatars.githubusercontent.com/u/101052517?v=4",
      },
      VaibhavDabhade97: {
        username: "VaibhavDabhade97",
        profile_pic: "https://avatars.githubusercontent.com/u/101499165?v=4",
      },
      tejaschaudhari192: {
        username: "tejaschaudhari192",
        profile_pic: "https://avatars.githubusercontent.com/u/104405128?v=4",
      },
      Vishalbhalkar: {
        username: "Vishalbhalkar",
        profile_pic: "https://avatars.githubusercontent.com/u/127299089?v=4",
      },
      harshajeetgirase: {
        username: "harshajeetgirase",
        profile_pic: "https://avatars.githubusercontent.com/u/137672737?v=4",
      },
      ChandrakantB21: {
        username: "ChandrakantB21",
        profile_pic: "https://avatars.githubusercontent.com/u/139560990?v=4",
      },
      jbarnoud: {
        username: "jbarnoud",
        profile_pic: "https://avatars.githubusercontent.com/u/1382074?v=4",
      },
      udacity: {
        username: "udacity",
        profile_pic: "https://avatars.githubusercontent.com/u/1916665?v=4",
      },
      IAlibay: {
        username: "IAlibay",
        profile_pic: "https://avatars.githubusercontent.com/u/12460125?v=4",
      },
      laxmena: {
        username: "laxmena",
        profile_pic: "https://avatars.githubusercontent.com/u/12819059?v=4",
      },
      "adeen-s": {
        username: "adeen-s",
        profile_pic: "https://avatars.githubusercontent.com/u/13867300?v=4",
      },
      PicoCentauri: {
        username: "PicoCentauri",
        profile_pic: "https://avatars.githubusercontent.com/u/15192133?v=4",
      },
      Debskij: {
        username: "Debskij",
        profile_pic: "https://avatars.githubusercontent.com/u/36741649?v=4",
      },
      DebadityaPal: {
        username: "DebadityaPal",
        profile_pic: "https://avatars.githubusercontent.com/u/49648350?v=4",
      },
      Th3lazykid: {
        username: "Th3lazykid",
        profile_pic: "https://avatars.githubusercontent.com/u/56188454?v=4",
      },
      sangita9853: {
        username: "sangita9853",
        profile_pic: "https://avatars.githubusercontent.com/u/66996245?v=4",
      },
      IshaSah: {
        username: "IshaSah",
        profile_pic: "https://avatars.githubusercontent.com/u/68952200?v=4",
      },
      rushikeshsonje: {
        username: "rushikeshsonje",
        profile_pic: "https://avatars.githubusercontent.com/u/90552874?v=4",
      },
      HRS0221: {
        username: "HRS0221",
        profile_pic: "https://avatars.githubusercontent.com/u/138743266?v=4",
      },
    };

    const userData = {
      name: username,
      bio: "👋 Hi there! I'm Dipak Mali, a passionate B.Tech student specializing in data science at R C Patel Institute of Technology, Shirpur.",
      location: "India",
      repos: "31",
      followers: "15",
      following: "13",
      profile_pic: "https://avatars.githubusercontent.com/u/96681905?v=4",
      allConnections: data,
    };

    // res.send(userData);
    res.render("user", userData);
    //
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getUser,
  root,
  getUserByUsername,
};
