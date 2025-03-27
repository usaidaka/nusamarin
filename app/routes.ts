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

  ...prefix("blogs", [
    index("routes/blogs/index.tsx"),
    route(":blog_id", "routes/blogs/blog.tsx"),
  ]),

  ...prefix("solution", [
    index("routes/solution/index.tsx"),
    route("sustainable", "routes/solution/sustainable.tsx"),
    route("energy", "routes/solution/energy.tsx"),
    route("tourism", "routes/solution/tourism.tsx"),
    route("carbon", "routes/solution/carbon.tsx"),
  ]),
] satisfies RouteConfig;
