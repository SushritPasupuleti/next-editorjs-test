
import dynamic from "next/dynamic";
const NoSSRComponent = dynamic(() => import("./editor.js"), {
  ssr: false,
});

const NextEditor = () => {
  return (
    <>
      <NoSSRComponent />
    </>
  );
}
export default NextEditor;