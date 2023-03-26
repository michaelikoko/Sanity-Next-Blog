import Iframe from "sanity-plugin-iframe-pane";

function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview?slug=${doc.slug.current}`
    : `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview`
}

export function defaultDocumentNode(S, { schemaType }) {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view.component(Iframe).options({
        // Required: Accepts an async function
        // OR a string
        url: (doc) => getPreviewUrl(doc),

        //Optional: Set the default size
        defaultSize: `desktop`, // default `desktop`

        // Optional: Add a reload button, or reload on new document revisions
        reload: {
          button: true, // default `undefined`
        },
        // Optional: Pass attributes to the underlying `iframe` element:
        attributes: {},
      }).title("Preview")
    ])
  }
  return S.document().views([S.view.form()])
}
/*
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `movie`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `http://localhost:3000/api/preview`,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

*/