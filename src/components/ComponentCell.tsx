import Tabs from "./Library/Tabs";

interface ComponentCellProps {
      componentName: string;
      componentDemo: string;
}

const ComponentCell = () => {
  return (
    <div className = "flex flex-col gap-2 p-3 border border-gray-200 rounded-lg">
        <h3 className = "text-lg">Component Cell</h3>
        <div className="p-3 border border-gray-100 rounded-md">
            <Tabs/>
        </div>
      </div>
  )
}

export default ComponentCell