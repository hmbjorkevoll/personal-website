import sanityClient from "@sanity/client";

// These are public keys - not disclosed by accident
export default sanityClient({
  projectId: "rnyt3x3f",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-09-10",
});
