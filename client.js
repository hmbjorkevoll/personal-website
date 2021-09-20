import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "NEXT_PUBLIC_SANITY_PROJECT_ID", 
  dataset: "NEXT_PUBLIC_SANITY_DATASET", 
  useCdn: true,
  apiVersion: "2021-09-10",
});
