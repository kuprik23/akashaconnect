import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening <br /> Unreal v2.2 is in.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 21,2022" text="Akasha Metaverse officially launch." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="May 26, 2022" text="Fashion at akasha metaverse. a new way to express." />
        <Article imgUrl={blog03} date="June 21, 2022" text="Elevating education with more hands-on experiment at akasha." />
        <Article imgUrl={blog04} date="April 12, 2022" text="Collaboration and work at akasha metaverse." />
        <Article imgUrl={blog05} date="sep 26, 2022" text="The gaming experience is a breez at akasha." />
      </div>
    </div>
  </div>
);

export default Blog;
