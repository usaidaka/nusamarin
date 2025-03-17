import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  ...prefix("posts", [
    index("routes/posts.tsx"),
    route(":post_id", "routes/post.tsx"),
  ]),
] satisfies RouteConfig;
