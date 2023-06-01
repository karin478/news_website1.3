import React from "react";
import "./AboutMe.css";

function Home() {
  return (
    <div className="about-me">
      <h2>Welcome to the Next Generation News Platform</h2>
      <p>
        With the rapid development of large language models (LLMs), manual text
        screening and linking are no longer necessary. Welcome to the next
        generation of personalized news websites.
      </p>
      <p>
        Our website utilizes OpenAI's large language models, GPT-3.5 and GPT-4.
        Our technical team has fine-tuned the input and output to cater to
        personalized news needs.
      </p>
      <h3>Comparing Traditional Media and the Next Generation News Platform</h3>
      <p>
        Traditional media requires users to constantly browse and filter,
        consuming a significant amount of time. Different media outlets may
        guide, exaggerate, or even deceive facts to varying degrees. The
        so-called major news may not be relevant to you, and many news items
        that significantly impact you are not only hard to find but also lack
        professional journalistic analysis. Personalized news analysis is costly
        and usually requires a company to form a team to monitor news and
        conduct tedious assessments.
      </p>
      <p>
        Our platform, on the other hand, uses language models to filter and
        score news based on user conditions. Users can obtain the information
        they need by simply moving a slider. The language model has no preset
        stance and will only analyze the actual impact on your company or you
        personally. The importance of the news itself is only related to you.
        Only news that may affect you will require your time to read. It's
        precise and practical. It replaces redundant news monitoring and
        analysis teams, helping you analyze the impact of news on your company
        or individual at a low cost, quickly and efficiently.
      </p>
      <h3>Future Development</h3>
      <p>
        As the next generation news website, we have built a direct connection
        between individuals & companies and the world. In the future, we will
        enhance the functionality of the website to meet customer needs in a
        more cost-effective, faster, and more personalized way.
      </p>
    </div>
  );
}

export default Home;
