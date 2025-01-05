import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("/:poolId", "routes/poolview.tsx")
] satisfies RouteConfig;
