require("dotenv").config();

const Hapi = require("@hapi/hapi");
const routes = require("../server/routes");
const InputError = require("../exceptions/InputError");

(async () => {
  const server = Hapi.server({
    port: 3077,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });


  server.route(routes); // Akan dibahas lebih lanjut setelah pembahasan extension.
  server.ext("onPreResponse", function (request, h) {
    const response = request.response;
    if (response instanceof InputError) {
      const newResponse = h.response({
        status: "fail",
        message: `${response.message}`,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }
    if (response.isBoom) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.output.statusCode);
      return newResponse;
    }
    return h.continue;
  });

  await server.start();
  console.log(`Server start at: ${server.info.uri}`);
})();
