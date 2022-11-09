import React from "react";
import { UseTitle } from "../../utils/DaynamicTitle";

const Blog = () => {
  UseTitle("Blog || Rainbow Photography");
  return <div className="px-8">This is Blog Page</div>;
};

export default Blog;
