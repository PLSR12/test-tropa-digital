import { createServer, Model } from "miragejs";
import { eventsMock } from "./eventsMock";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      user: Model.extend({}),
      event: Model.extend({}),
    },

    seeds(server) {
      server.create("user", {
        id: "1",
        email: "admin@email.com",
        password: "123456",
        name: "Admin Teste",
        token: "fake-jwt-token",
      });

      eventsMock.forEach((event, index) => {
        server.create("event", { id: String(index + 1), ...event });
      });
    },

    routes() {
      this.namespace = "api";

      this.timing = 1000; // colocado para simular um delay de rede e exibir loadings

      this.post("/login", () => {
        const userLogged: any = {
          token: "fake-jwt-token",
          user: {
            email: "admin@email.com",
            password: "123456",
            name: "Admin Teste",
          },
        };
        return userLogged;
      });

      this.get("/events", (schema, request) => {
        const allEvents = schema.all("event").models;

        const rawPage = request.queryParams.page;
        const rawPageSize = request.queryParams.pageSize;

        function toSingleString(
          param: string | string[] | null | undefined,
          defaultValue: string,
        ): string {
          if (param == null) return defaultValue;
          if (Array.isArray(param)) return param[0];
          return param; // se string, retorna direto
        }

        const page = toSingleString(rawPage, "1");
        const pageSize = toSingleString(rawPageSize, "10");

        const pageNumber = parseInt(page, 10);
        const size = parseInt(pageSize, 10);

        const start = (pageNumber - 1) * size;
        const end = start + size;
        const paginated = allEvents.slice(start, end);

        return {
          data: paginated,
          page: pageNumber,
          pageSize: size,
          total: allEvents.length,
        };
      });

      // Permite que outras rotas passem para a rede real
      this.passthrough();
    },
  });
}
