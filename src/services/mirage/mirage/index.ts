import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    serializers: { application: ActiveModelSerializer },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email();
        },
        created_at() {
          return faker.date.recent();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/users", function (schema, request) {
        const { page = 1, perPage = 10 } = request.queryParams;
        const total = schema.all("user").length;
        const pageStart = (Number(page) - 1) * Number(perPage);
        const pageEnd = pageStart + Number(perPage);
        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );
        return new Response(200, { "x-total-count": String(total) }, { users });
      }),
        this.post("/users");
      this.get("/users/:id");
      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}
