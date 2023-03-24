    import sanityClient from "@sanity/client";
    import imageUrlBuilder from "@sanity/image-url";

    export const client = sanityClient({
        projectId: 'ny7xdyx1',
        dataset:'production',
        apiVersion:'2023-03-09',
        useCdn: true,
        token: process.env.Sanity_key,
    }) ;

    const builder = imageUrlBuilder(client);

    export const urlFor = (source) => builder.image(source);