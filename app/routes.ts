import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("thesis", "routes/thesis.tsx"),
  route("contact", "routes/contact.tsx"),
  route("sustainability", "routes/sustainability.tsx"),
  route("solution/sustainable", "routes/solution/sustainable.tsx"),
  route("solution/energy", "routes/solution/energy.tsx"),
  route("solution/tourism", "routes/solution/tourism.tsx"),
  route("solution/carbon", "routes/solution/carbon.tsx"),

  ...prefix("blogs", [
    index("routes/blogs/index.tsx"),
    route(":blog_id", "routes/blogs/blog.tsx"),
  ]),
] satisfies RouteConfig;
