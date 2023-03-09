    import SanityClient from "@sanity/client";
    import { ImageUrlBuilder } from "next-sanity-image";

    const client = SanityClient({
        projectId: 'ny7xdyx1',
        dataset:'production',
        apiVersion:'',
        useCdn: true,
        token:'',
    })