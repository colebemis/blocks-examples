import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import { FileBlockProps } from "@githubnext/utils";

export default function (props: FileBlockProps) {
  const { content } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <SandpackProvider
        externalResources={["https://cdn.tailwindcss.com"]}
        template="react"
        customSetup={{
          dependencies: {},
          files: { '/App.js': `
  export default () => {
    return 'App'
  }
` },
        }}
        autorun
      >
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </SandpackProvider>
    </div>
  );
}
