import { gql } from "@apollo/client";

export const GET_FAQS = gql`
  query GetFAQs {
    preguntaFrecuentes {
      nodes {
        title
        camposPreguntasFrecuentes {
          respuesta
        }
      }
    }
  }
`;
