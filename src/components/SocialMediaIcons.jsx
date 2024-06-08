const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        gref="https://www.linkedin.com/in/lei-shi-26530b285/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        gref="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={require("../assets/twitter.png")} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        gref="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={require("../assets/facebook.png")} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        gref="https://www.instagram.com/npc.v7/?next=%2F"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={require("../assets/instagram.png")} />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
