import React from "react";
import "./Blog.css";
import { UseTitle } from "../../utils/DaynamicTitle";

const Blog = () => {
  UseTitle("Blog || Rainbow Photography");
  return (
    <div className="px-10 py-5">
      {/* 1 */}
      <div className="bg-slate-100 p-4 mb-4">
        <h2 className="text-3xl font-semibold mb-2">
          1. Difference between SQL and NoSQL?
        </h2>
        <p className="text-justify">
          1. SQL databases are relational, NoSQL databases are non-relational.{" "}
          <br />
          2. SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
          <br />
          3. SQL databases are vertically scalable, NoSQL databases are
          horizontally scalable. <br />
          4. SQL databases are table-based, NoSQL databases are document,
          key-value, graph, or wide-column stores. <br />
          5. SQL databases are better for multi-row transactions, NoSQL is
          better for unstructured data like documents or JSON
        </p>
      </div>
      {/* 2 */}
      <div className="bg-slate-100 p-4 mb-4">
        <h2 className="text-3xl font-semibold mb-4">
          2. What is JWT, and how does it work?
        </h2>
        <p className="text-justify">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br />A JWT is a string made up of three parts, separated by dots (.),
          and serialized using base64. In the most common serialization format,
          compact serialization, <br />
          the JWT looks something like this: xxxxx.yyyyy.zzzzz.
        </p>
      </div>
      {/* 3 */}
      <div className="bg-slate-100 p-4 mb-4">
        <h2 className="text-3xl font-semibold mb-4">
          3. What is the difference between javascript and NodeJS?
        </h2>
        <p className="text-justify">
          1. JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language. <br />
          <br />
          2. JavaScript is a simple programming language that can be used with
          any browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.{" "}
          <br />
          <br />
          3. Any engine may run JavaScript. As a result, writing JavaScript is
          incredibly easy, and any working environment is similar to a complete
          browser. Node.js, on the other hand, only enables the V8 engine.
          Written JavaScript code, on the other hand, can run in any context,
          regardless of whether the V8 engine is supported. <br />
          <br />
          4. A specific non-blocking operation is required to access any
          operating system. There are a few essential objects in JavaScript, but
          they are entirely OS-specific. Node.js, on the other hand, can now
          operate non-blocking software tasks out of any JavaScript programming.
          It contains no OS-specific constants. Node.js establishes a strong
          relationship with the system files, allowing companies to read and
          write to the hard drive. <br />
          <br />
          5. The critical benefits of JavaScript include a wide choice of
          interfaces and interactions and just the proper amount of server
          contact and direct visitor input. Node.js, on the other hand, offers
          node package management with over 500 modules and the capacity to
          handle many requests at the same time. It also offers the unique
          ability to enable microservice architecture and the Internet of
          Things. Even when comparing node js vs. react js, node js always wins.
        </p>
      </div>
      {/* 4 */}
      <div className="bg-slate-100 p-4">
        <h2 className="text-3xl font-semibold mb-4">
          4. How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="text-justify">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue.
          <br />
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
