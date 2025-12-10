import ComponentCell  from "@components/ComponentCell"

const ComponentBentoGrid = () => {
  return (
    <div className="flex flex-col justify-start w-full">
        <h2 className="text-2xl">Component Demos</h2>
        <div className = "grid">
            <ComponentCell />
        </div>
    </div>
  )
}

export default ComponentBentoGrid