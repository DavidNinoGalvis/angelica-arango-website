import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://angelicaarango.com/graphql");

export async function fetchPosts() {
  const query = `
    query {
      posts {
        nodes {
          title
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;
  return client.request(query);
}
