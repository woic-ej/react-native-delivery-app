import sanityClient from "./sanity";
import { getFeaturedRestaurant } from "./api";

let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getFeaturedRestaurant = () => {
  return sanityClient(`
    *[_type=='featured']{
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> {
            name
          }
        }
      }
    `);
};

export const getCategories = () => {
  return sanityClient(`
    *[_type=='category']
    `);
};

export const getFeaturedRestaurantById = (id) => {
  return sanityClient(
    `
    *[_type=='featured' && _id == $id]{
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> {
            name
          }
        }
      }[0]
    `,
    { id }
  );
};
