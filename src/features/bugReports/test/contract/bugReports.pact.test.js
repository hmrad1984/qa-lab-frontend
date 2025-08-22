import path from "path";
import { PactV3 } from "@pact-foundation/pact";
import fetch from "node-fetch";

const provider = new PactV3({
  consumer: "Frontend-QALab",
  provider: "Backend-QALab",
  dir: path.resolve(process.cwd(), "pacts"),
});

describe("Pact with Backend-QALab", () => {
  it("GET /api/bugs returns a list of bug reports", async () => {
    provider
      .uponReceiving("a request for bug reports")
      .withRequest({
        method: "GET",
        path: "/api/bugs",
      })
      .willRespondWith({
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: [
          {
            id: 1,
            title: "UI Bug",
            description: "Button misaligned",
            status: "OPEN",
            severity: "HIGH",
          },
        ],
      });

    return provider.executeTest(async (mockServer) => {
      const response = await fetch(`${mockServer.url}/api/bugs`);
      const json = await response.json();

      expect(response.status).toBe(200);
      expect(json[0].title).toBe("UI Bug");
    });
  });
});
