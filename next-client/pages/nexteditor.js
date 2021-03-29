
import dynamic from "next/dynamic";
const NoSSRComponent = dynamic(() => import("../components/editor/editor"), {
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